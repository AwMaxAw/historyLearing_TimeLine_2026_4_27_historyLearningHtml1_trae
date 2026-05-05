import zipfile
import xml.etree.ElementTree as ET
import os
import re

def extract_text_from_pptx(file_path):
    text_content = []
    try:
        with zipfile.ZipFile(file_path, 'r') as zip_ref:
            # Get list of files in the zip
            files = zip_ref.namelist()
            # Find all slide files and sort them
            slides = sorted([f for f in files if f.startswith('ppt/slides/slide') and f.endswith('.xml')],
                           key=lambda x: int(re.findall(r'\d+', x)[0]))
            
            for slide in slides:
                with zip_ref.open(slide) as f:
                    tree = ET.parse(f)
                    root = tree.getroot()
                    # Namespace for PPTX text
                    namespaces = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
                    slide_text = []
                    for t in root.findall('.//a:t', namespaces):
                        if t.text:
                            slide_text.append(t.text)
                    if slide_text:
                        slide_num = re.findall(r'\d+', slide)[0]
                        text_content.append(f"--- Slide {slide_num} ---")
                        text_content.append("\n".join(slide_text))
                        text_content.append("\n")
    except Exception as e:
        return f"Error: {str(e)}"
    
    return "\n".join(text_content)

if __name__ == "__main__":
    ppt_file = "历史复习背书ppt1.pptx"
    output_file = "ppt_content.txt"
    if os.path.exists(ppt_file):
        content = extract_text_from_pptx(ppt_file)
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Content extracted to {output_file}")
    else:
        print(f"File {ppt_file} not found")

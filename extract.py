import fitz
import os

pdf_path = r"C:\Users\LENOVO\.gemini\antigravity-ide\brain\9ba1a262-45af-4765-a369-ec9514c85422\media__1783086487814.pdf"
out_dir = "images_extracted"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images()
    
    # If there are multiple images, just save them all
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Save image
        with open(os.path.join(out_dir, f"page_{page_num+1}_img_{image_index}.{image_ext}"), "wb") as f:
            f.write(image_bytes)
            
    # If there are no images, maybe render the page and save it
    if len(image_list) == 0:
        pix = page.get_pixmap()
        pix.save(os.path.join(out_dir, f"page_{page_num+1}_rendered.png"))

print(f"Extracted images to {out_dir}")

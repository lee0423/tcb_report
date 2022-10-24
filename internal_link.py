import imp
import os
import glob
import pandas as pd

count = 0
page_num = 0

def internalLink(pdf, count=count):
    for file in map(os.path.basename, sorted(glob.glob("/Users/liaoyi-ming/Desktop/tcb_report/*"),key=os.path.getmtime)):
        # print(file)
        count += 1
        df = pd.read_excel(f'/Users/liaoyi-ming/Desktop/tcb_report/{file}')
        chart_title = df.iloc[0,1]
        title_w = int(pdf.get_string_width(chart_title))
        # title_w = len(chart_title)
        # doc_w = int(pdf.w)
        pdf.write(1, f"{chart_title}")
        pdf.set_x(title_w + 2)
        pdf.write(1, "........")
        pdf.ln(1)
        if count % 24 == 0:
            pdf.add_page()
            pdf.set_y(2.5)
    
    # print(title_w)
from fpdf import FPDF
from matplotlib import style
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
from remove_file import remove_file
from create_files import create_metric_file
from create_images import report_images
from internal_link import internalLink

title = '合作金庫網路銀行應用系統-'
current_month = datetime.now().strftime('%m')
current_time = datetime.now()

class PDF(FPDF):
    def header(self):
        self.add_font('fireflysung', fname='/Users/liaoyi-ming/Desktop/SoftPro/tcb/fireflysung-1.3.0/fireflysung.ttf')
        self.set_font('fireflysung',size=15)
        title_w = self.get_string_width(title) + 12
        doc_w = self.w
        self.set_x((doc_w - title_w) / 2)
        self.cell(title_w, 0, f'{title}{current_month}月報表', border=0, ln=1, align='R')
        self.image('/Users/liaoyi-ming/Downloads/appd-logo.png',x=0.5,y=0.5, w=6, h=1)
        self.set_draw_color(r=169, g=169, b=169)
        self.line(x1=0, y1=1.7,x2=50,y2=1.7)

    def footer(self):
        self.set_y(-8)
        self.set_font('times', 'I', 10)
        # self.set_text_color(169,169,169)
        self.line(x1=0, y1=-1.7,x2=50,y2=-1.7)
        # self.set_text_color(r=169, g=169, b=169)
        self.cell(0, 15, f'Page {self.page_no()}/{{nb}}', align='C', )
        self.set_text_color(r=169, g=169, b=169)
        self.cell(0,15,f"Report creaed at {current_time}", align='R')
        # self.cell(0,15,f"Report creaed at {self.set_creation_date(date=current_time)}", align='R')


def create_report(pdf_name):
    pdf = PDF('P', 'cm', 'A4',)

    pdf.add_page()
    pdf.set_xy(pdf.w/2 - 3.2 , 2.2)
    # pdf.set_fill_color(3, 182, 252)
    pdf.set_font("helvetica", style='BIU', size=18)
    pdf.set_text_color(r=128, g=128, b=128)
    pdf.write(txt="Table of contents : ",)
    pdf.set_y(3)
    pdf.set_text_color(r=0, g=0, b=0)
    pdf.set_font("Times", size=12)

    internalLink(pdf=pdf)

    pdf.add_font('fireflysung', 
                fname='/Users/liaoyi-ming/Desktop/SoftPro/tcb/fireflysung-1.3.0/fireflysung.ttf')
    pdf.set_font('fireflysung', size=14)


    import os

    #remove all files in the report folder before processing.
    remove_file()

    #create excel for each metric from dexter.
    create_metric_file()

    #count all files in the report folder.
    count = 0
    dir_path = '/Users/liaoyi-ming/Desktop/tcb_report/'
    for path in os.listdir(dir_path):
        if path.endswith(".xlsx"):
            count += 1 

    #Start adding chart to PDF file.
    report_images(pdf=pdf, count=count)

    # get number of pages
    pdf.alias_nb_pages()

    # Set auto page break
    pdf.set_auto_page_break(auto = True, margin = 10)
    pdf.output(pdf_name)
    # print(pdf.w)

if __name__ == "__main__":

    #create report and pass a location for file saving.
    create_report("/Users/liaoyi-ming/Downloads/pdf_2.pdf")
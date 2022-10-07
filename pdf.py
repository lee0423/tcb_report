import imp
from fpdf import FPDF
import pandas as pd
import matplotlib.pyplot as plt
import io
from datetime import datetime, date
import calendar
from fpdf.enums import XPos, YPos

title = '合作金庫網路銀行應用系統-'
current_month = datetime.now().strftime('%m')
current_time = datetime.now()

class PDF(FPDF):
    def header(self):
        self.add_font('fireflysung', fname='/Users/liaoyi-ming/Desktop/SoftPro/tcb/fireflysung-1.3.0/fireflysung.ttf')
        self.set_font('fireflysung',size=15, )
        title_w = self.get_string_width(title) + 10
        doc_w = self.w
        self.set_x((doc_w - title_w) / 2)
        self.cell(title_w, 0, f'{title}{current_month}月報表', border=0, ln=1, align='R')
        self.image('/Users/liaoyi-ming/Downloads/appd-logo.png',x=0.5,y=0.5, w=6, h=1)
        self.set_draw_color(r=169, g=169, b=169)
        self.line(x1=0, y1=1.7,x2=50,y2=1.7)
        # self.cell(title_w, 0, 'Created date')

    def footer(self):
        self.set_y(-8)
        self.set_font('times', 'I', 10)
        # self.set_text_color(169,169,169)
        self.line(x1=0, y1=-1.7,x2=50,y2=-1.7)
        self.cell(0, 15, f'Page {self.page_no()}/{{nb}}', align='C', )
        self.set_text_color(r=169, g=169, b=169)
        self.cell(0,15,f"Report creaed at {current_time}", align='R')

    def report_content(self):
        self.set_font('Arial', 'B', 12,)
        # pdf.cell(0)
        self.set_x(0.1)
        self.set_y(2)
        # self.set_text_color(r=169,g=169,b=169)
        self.cell(5, 1, 'Title', border=0, ln=1, align='L')

    def report_header(self):
        self.set_xy(x=0.5,y=2.5)
        self.cell(5,0, "最大值:",border=False,ln=2)
        self.cell(5,0, "最小值:",border=False,)


def clean_data():
    df = pd.read_excel('/Users/liaoyi-ming/Desktop/tcb-metrics.xlsx', 
                   sheet_name='Entity.Metrics',
                   usecols="AQ,AT:AU",
                   index_col=False)

    df = df.rename(columns=df.iloc[2])
    title = df.iloc[3,0]
    df = df.dropna()
    df = df.drop([2])
    plt.figure()
    df['EventTime']=pd.to_datetime(df['EventTime'])
    df.plot(x='EventTime', y='Value',figsize=(15,5), title=title, kind='line')
    img_buf = io.BytesIO()  # Create image object
    plt.savefig(img_buf, dpi=200)  # Save the image
    
    return img_buf

def create_report(pdf_name):
    pdf = PDF('P', 'cm', 'A4',)

    pdf.add_page()

    pdf.add_font('fireflysung', 
                fname='/Users/liaoyi-ming/Desktop/SoftPro/tcb/fireflysung-1.3.0/fireflysung.ttf')
    pdf.set_font('fireflysung', size=14)
    # pdf.report_header()
    # pdf.write(8, u'Chinese: 你好世界')
    pdf.image(clean_data(),x=-1.7, w=pdf.epw+5, y=10)

    # get total page numbers
    pdf.alias_nb_pages()

    # Set auto page break
    pdf.set_auto_page_break(auto = True, margin = 10)
    pdf.add_page()
    # pdf.set_text_color(r=169,g=169,b=169)
    pdf.report_content()
    pdf.output(pdf_name)

if __name__ == "__main__":
    create_report("/Users/liaoyi-ming/Downloads/pdf_1.pdf")
# print(clean_data())

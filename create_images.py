import pandas as pd
import matplotlib.pyplot as plt
import io

def report_images(pdf, count):

    for i in range(1, count+1):

            if i % 2 != 0:
                df = pd.read_excel(f'/Users/liaoyi-ming/Desktop/tcb_report/{i}.xlsx')
                plt.figure()
                chart_title = df.iloc[0,1]
                # df['EventTime']=pd.to_datetime(df['EventTime'])
                df = df.pivot(index='EventTime', columns='EntityName', values='Value')
                df.plot( figsize=(15, 7), title=chart_title, grid=True)
                # df.plot(x='EventTime', y='Value',figsize=(11,5), title=chart_title, kind='line')
                img_buf = io.BytesIO()  # Create image object
                plt.savefig(img_buf, dpi=200)  # Save the image
                pdf.add_page()
                pdf.image(img_buf,x=-1.7, w=pdf.epw+5, y=3)
                # pdf.set_auto_page_break(auto = True, margin = 10)
            else:
                df = pd.read_excel(f'/Users/liaoyi-ming/Desktop/tcb_report/{i}.xlsx')
                plt.figure()
                chart_title = df.iloc[0,1]
                # df['EventTime']=pd.to_datetime(df['EventTime'])
                df = df.pivot(index='EventTime', columns='EntityName', values='Value')
                df.plot( figsize=(15, 7), title=chart_title, grid=True)
                # df.plot(x='EventTime', y='Value',figsize=(11,5), title=chart_title, kind='line')
                img_buf = io.BytesIO()  # Create image object
                plt.savefig(img_buf, dpi=200)  # Save the image
                # pdf.add_page()
                pdf.image(img_buf,x=-1.7, w=pdf.epw+5, y=15)
                pdf.set_auto_page_break(auto = True, margin = 10)
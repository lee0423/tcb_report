import pandas as pd

def create_metric_file():

    pdf = pd.read_excel('/Users/liaoyi-ming/Desktop/tcb-metrics.xlsx',
                        sheet_name='Entity.Metrics',
                        index_col=None,)

    pdf = pdf.rename(columns=pdf.iloc[2])

    pdf = pdf.dropna(axis=0, how='all').drop(2, axis=0)

    pdf = pdf.reset_index().drop("index", axis=1)

    ddf = pd.DataFrame(pdf)

    cols = ddf.columns

    col_value = cols.get_loc("Value")

    col_metric = cols.get_loc("MetricName")

    col_entityname = cols.get_loc("EntityName")

    col_eventtime = cols.get_loc("EventTime")

    df1 = ddf.iloc[:, col_entityname]

    df2 = ddf.iloc[:, col_metric]

    df3 = ddf.iloc[:, col_eventtime]

    df4 = ddf.iloc[:, col_value]

    res1 = df1.join(df2)

    res2 = res1.join(df3)

    res3 = res2.join(df4)

    res = res3

    step_index = int(len(res.columns) / 4)

    for i in range(0, step_index):
        rest = res.iloc[:,i::step_index].to_excel(f'/Users/liaoyi-ming/Desktop/tcb_report/{i+1}.xlsx', 
                                                  sheet_name=f'Sheet_name', 
                                                  index=False)
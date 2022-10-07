import os

def remove_file():

    dir = '/Users/liaoyi-ming/Desktop/tcb_report'
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))
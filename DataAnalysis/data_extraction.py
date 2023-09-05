# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import pandas as pd
import json
import re
import os
import numpy as np

def generated_data (*args, **kwargs):
    compare_dict = {}
    key_response = ['trial_1','trial_2','trial_3']
    for i in range(3,18):
        compare_dict[str(200)+str(i)] = {}
        for k in key_response:
            compare_dict[str(200)+str(i)][k] = {}
            compare_dict[str(200)+str(i)][k]['Stimuli'] = []
            compare_dict[str(200)+str(i)][k]['Answers'] = []
    key_response = ['trial_1','trial_2','trial_3']
    files = os.listdir('/Volumes/NoelHDD/Pupil-PitchData/Replication/numpy/StimSet')
    for i in files:
        if(i[-1]=='y'):
            filepath = '/Volumes/NoelHDD/Pupil-PitchData/Replication/numpy/StimSet/'+i
            a = np.load(filepath)
            participant_no = re.findall('[0-9]+', filepath)
            participant_no = int(participant_no[0])
            a = np.load(filepath)
            for i in range(3):
                compare_dict[str(participant_no)][key_response[i]]['Stimuli'] = (a[i].tolist())
    files = os.listdir('/Volumes/NoelHDD/Pupil-PitchData/Replication/numpy/Answers')
    for i in files:
        if(i[-1]=='y'):
            filepath = '/Volumes/NoelHDD/Pupil-PitchData/Replication/numpy/Answers/'+i
            participant_no = re.findall('[0-9]+', filepath)
            participant_no = int(participant_no[0])
            a = np.load(filepath)
            for i in range(3):
                compare_dict[str(participant_no)][key_response[i]]['Answers'] = (a[i].tolist())
                
    return compare_dict



def read_csv(path_to_file,participant):    
    df = pd.read_csv(path_to_file)
    data_dict = {}
    col_interest = []
    for col_name in df.columns:
        if(col_name[:5] == 'sound'):
            colname = col_name
            pos = colname.find('.')
            print(col_name[pos:-1])
            if(col_name[pos:-1]=='.starte'):
                col_interest.append(col_name)
    col_interest = col_interest[6:]
    key_interest = []
    for col_name in df.columns:
        if(col_name[:8] == 'key_resp'):
            colname = col_name
            pos = colname.find('.')
            print(col_name[pos:-1])
            if(col_name[pos:-1]=='.key'):
                key_interest.append(col_name)
    key_interest = key_interest[5:]
    key_interest.remove('key_resp_3.keys')
    sounds = ['start_sound','reference_sound','comparison_sound','stop_sound','feedback_sound']
    key_response = ['trial_1','trial_2','trial_3']
    #for i in range(1,14):
        #data_dict[str(i)]={}
    data_dict[participant] = {}
    data_dict[participant]['Sound_times'] = {}
    data_dict[participant]['Key_Responds'] = {}
    for k in (sounds):
        data_dict[participant]['Sound_times'][k]=[]
    for j in range(3):
        data_dict[participant]['Key_Responds'][key_response[j]]=[]
    strIdx = 8
    endIdx = 19
    f = 0
    for m in range(3):
            print(strIdx)
            print(endIdx)
            for j,k in enumerate(sounds):
                data_dict[participant]['Sound_times'][k].append(df[col_interest[f]][strIdx:endIdx].values.tolist())
                f=f+1
            data_dict[participant]['Key_Responds'][key_response[m]].append(df[key_interest[m]][strIdx:endIdx].values.tolist())
            strIdx= endIdx+1
            endIdx = strIdx+11
    return data_dict

def json_writer(DATA):
# create json object from dictionary
    jsonobj = json.dumps(DATA)

# open file for writing, "w" 
    f = open("DATA_replication_compare.txt","w")

# write json object to file
    f.write(jsonobj)
    f.close()
    return 

def json_reader(path_to_file):
    with open(path_to_file) as f:
        data = f.read()
  
    print("Data type before reconstruction : ", type(data))
      
    # reconstructing the data as a dictionary
    js = json.loads(data)
  
    print("Data type after reconstruction : ", type(js))
    print(js)
    return js

def run_main(path_to_folder):
    DATA = {}
    import os
    files = os.listdir(path_to_folder)
    for i in files:
        if(i[-1]=='v'):
            filepath = path_to_folder+'/'+i
            DATA[i[0:i.find('.')]] = read_csv(filepath,i[0:i.find('.')])
    return DATA
compare_dic = generated_data()
json_writer(compare_dic)
#DATA = run_main('/Volumes/NoelHDD/Pupil-PitchData/Replication2/csv')  
#print(DATA) 
#json_writer(DATA)
#DATA = read_csv('/Users/noelalben/Desktop/Pupil-PitchData/data 2/001_Trial_Exp_2022-05-13_11h47.45.121.csv','014')
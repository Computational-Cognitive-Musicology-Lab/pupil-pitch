import pandas as pd

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
    key_interest = []
    for col_name in df.columns:
        if(col_name[:8] == 'key_resp'):
            colname = col_name
            pos = colname.find('.')
            print(col_name[pos:-1])
            if(col_name[pos:-1]=='.key'):
                key_interest.append(col_name)
    
    sounds = ['start_sound','reference_sound','comparison_sound','stop_sound','feedback_sound']
    key_response = ['trial_1','trial_2','trial_3','trial_4','trial_5']
    #for i in range(1,14):
        #data_dict[str(i)]={}
    data_dict[participant] = {}
    data_dict[participant]['Sound_times'] = {}
    data_dict[participant]['Key_Responds'] = {}
    for j,k in enumerate(sounds):
        data_dict[participant]['Sound_times'][k]=[]
        data_dict[participant]['Key_Responds'][key_response[j]]=[]
    strIdx = 8
    endIdx = 19
    f = 0
    for m in range(5):
            print(strIdx)
            print(endIdx)
            for j,k in enumerate(sounds):
                data_dict[participant]['Sound_times'][k].append(df[col_interest[f]][strIdx:endIdx].values.tolist())
                f=f+1
            data_dict[participant]['Key_Responds'][key_response[m]].append(df[key_interest[m]][strIdx:endIdx].values.tolist())
            strIdx= endIdx+1
            endIdx = strIdx+11
    return data_dict

DATA = read_csv('/Users/noelalben/Desktop/Pupil-PitchData/data 2/001_Trial_Exp_2022-05-13_11h47.45.121.csv','014')
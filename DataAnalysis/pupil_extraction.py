import pandas as pd 
import os.path as op
import json

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
sns.set_context('notebook', font_scale=1.2)

from pyplr import graphing, utils, preproc
from pyplr.plr import PLR
import numpy as np
import numpy as np
from scipy.signal import butter,filtfilt

def json_reader(path_to_file):
    with open(path_to_file) as f:
        data = f.read()
  
    #print("Data type before reconstruction : ", type(data))
      
    # reconstructing the data as a dictionary
    js = json.loads(data)
  
    #print("Data type after reconstruction : ", type(js))
    #print(js)
    return js
def json_writer(DATA,participant_no):
# create json object from dictionary
    jsonobj = json.dumps(DATA)

# open file for writing, "w" 
    save_file = str(participant_no)+".txt"
    f = open(save_file,"w")

# write json object to file
    f.write(jsonobj)
    f.close()
    return 



def pupil_extract(path,participant_no):
    experimentsrc_data =  json_reader('/Users/noelalben/github/pupil-pitch/Pupil-labs/compare_data.txt')
    participant_data= json_reader('/Users/noelalben/github/pupil-pitch/Pupil-labs/DATA.txt')
    frequencies = ['820','826','832','838','844','850','856','862','868','874','880']
    block_keys = ['block_1', 'block_2', 'block_3', 'block_4', 'block_5']
    user_dictionary = {}
    for i in frequencies:
        user_dictionary[i] = {}
        for j in block_keys:
            user_dictionary[i][j] = {}
            user_dictionary[i][j]['time_stamps']=[]
            user_dictionary[i][j]['event_stamps']=[]
            user_dictionary[i][j]['first_set']=[]
            user_dictionary[i][j]['second_set']=[]
            user_dictionary[i][j]['second_set_timestamps']=[]
            user_dictionary[i][j]['first_set_timestamps']=[]
            
    trial_keys = ['trial_1', 'trial_2', 'trial_3', 'trial_4', 'trial_5']
    # Some useful constants
    SAMPLE_RATE = 200
    #DURATION = 1500
    #ONSET_IDX = 1
    # Columns to load
    use_cols = ['confidence',
            'method',
            'pupil_timestamp',
            'eye_id',
            'diameter_3d',
            'diameter']
    participant_info = experimentsrc_data[str(participant_no)]
    for block in range(1,6):
        block_folder = str(participant_no)+str(block)
        if(participant_no >= 10):
                block_folder = '0'+str(participant_no)+str(block)
                print(block_folder)
                flag = True
        else:
            flag = False
        for trial_number in range(0,11):
            freq = participant_info[trial_keys[block-1]]['Stimuli'][trial_number][6:9]
            user_block = user_dictionary[freq][block_keys[block-1]]
            #print(user_block)
            trial_folder = '00'+str(trial_number)
            if(trial_number == 10):
                trial_folder = '010'
            directory = path+'/00'+block_folder+'/'+trial_folder
            if(flag==True):
                directory = path+'/'+block_folder+'/'+trial_folder
            print(directory)
            # Pupil Labs recording directories / exports
            subjects = {
            '001': [directory, '000']
            }
            df = pd.DataFrame()

            # Loop over subjects
            for k in subjects.keys():
                # Get a handle on a subject
                rec = subjects[k][0]
                export = subjects[k][1]
                s = utils.new_subject(
                    rec, export=export, out_dir_nm='pyplr_analysis')

                # Load pupil data
                samples = utils.load_pupil(
                    s['data_dir'], eye_id='best', method='3d', cols=use_cols)
                blinks  = utils.load_blinks(s['data_dir'])

                # Pupil columns to analyse
                pupil_cols = ['diameter_3d', 'diameter']

                #First Derivative
                samples = preproc.mask_pupil_first_derivative(samples, threshold=3.0, mask_cols=pupil_cols)

                #Mask Blinks 
                #samples = preproc.mask_blinks(samples, blinks, mask_cols=['diameter_3d'])

                #Mask Pupil Confidence
                samples = preproc.mask_pupil_confidence(samples, threshold=0.75, mask_cols=pupil_cols)
                
                
                #Low Pass Filter the Samples at a 1 Hz Cut off
                #try:
                    #Interpolate Samples 

                samples = preproc.interpolate_pupil(samples, method='polynomial', order=2,interp_cols=pupil_cols)
                samplestmp = samples
                samples1 = preproc.butterworth_series(samplestmp, fields=pupil_cols, filt_order=3,cutoff_freq=1/(200/2))
                if (samples1['diameter_3d'].isnull().all() == True):
                    samples = samples
                else:
                    samples = samples1
               # except samples['diameter_3d'].isnull().all() == True:
                    s
                    

                events = utils.load_annotations(s['data_dir'])
                event_qeury = events.axes[0].tolist()
                event_qeury = [round(float(i), 2) for i in event_qeury]
                qeury = samples.axes[0].tolist()
                query = [round(float(i), 2) for i in qeury ]
                user_block['time_stamps'] = query
                user_block['event_stamps'] = event_qeury
                

                #Plotting the samples for participant
                #First two Events 
                plt.figure()
                plt.title(directory)
                try:
                    samples_extract = samples.iloc[query.index(event_qeury[0]):query.index(event_qeury[1])+600,:].iloc[::50,:].axes[0].tolist()
                    plt.plot(samples.iloc[query.index(event_qeury[0]):query.index(event_qeury[1])+600,:].iloc[::50,:]['diameter_3d'])
                    user_block['first_set'] = samples.iloc[query.index(event_qeury[0]):query.index(event_qeury[1])+600,:].iloc[::50,:]['diameter_3d'].tolist()
                    for xc in event_qeury[:2]:
                        plt.axvline(x=xc,color='red',linestyle = 'dotted')
                    ax = plt.gca()
                    ax.set_xticks(event_qeury[:2])
                    ax.set_xticklabels(events['label'].tolist()[:2])
                    
                    user_block[i][j]['first_set_timestamps']=samples_extract
                    plt.setp(ax.get_xticklabels(), rotation=45, ha='right')

                #Second set of Events
                    plt.figure()
                    samples_extract = samples.iloc[query.index(event_qeury[2])-200:query.index(event_qeury[5])+400,:].iloc[::50,:].axes[0].tolist()
                    plt.plot(samples.iloc[query.index(event_qeury[2])-200:query.index(event_qeury[5])+400,:].iloc[::50,:]['diameter_3d'])
                    user_block['second_set'] = samples.iloc[query.index(event_qeury[2])-200:query.index(event_qeury[5])+400,:].iloc[::50,:]['diameter_3d'].tolist()
                    for xc in event_qeury[2:6]:
                        plt.axvline(x=xc,color='red',linestyle = 'dotted')
                    ax = plt.gca()
                    ax.set_xticks(event_qeury[2:6])
                    ax.set_xticklabels(events['label'].tolist()[2:6])
                    user_block['second_set_timestamps']=samples_extract
                    plt.setp(ax.get_xticklabels(), rotation=45, ha='right')
                except Exception:
                    continue
    json_writer(user_dictionary,participant_no)
    return 0
        
        
        
        
        
        
        
        
        
        
        
path = '/Users/noelalben/Desktop/Pupil-PitchData/EyeRecording'
pupil_extract(path,10)    

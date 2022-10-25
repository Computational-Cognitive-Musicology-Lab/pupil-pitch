#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.2),
    on Sat May 21 15:44:10 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

import random, xlrd
import csv

#randomize the seed
random.seed()
#stimulus file
infile = '/Users/cmml/Documents/Pupillometry_Experiment/looptemplate3.xlsx'

sounds2 = ['Audio/right_tick.wav','Audio/wrong_buzz.wav','Audio/right_tick.wav','Audio/wrong_buzz.wav']
cntpracts =0


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.1.2'
expName = 'Trial_Exp'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/cmml/github/pupil-pitch/Experiment_Source/Pupillometry_test_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# Setup ioHub
ioConfig = {}
ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='ptb')

# Initialize components for Routine "init_code"
init_codeClock = core.Clock()
stim_words = ['Audio/820.0.wav','Audio/826.0.wav','Audio/832.0.wav','Audio/838.0.wav','Audio/844.0.wav','Audio/850.0.wav','Audio/856.0.wav','Audio/862.0.wav','Audio/868.0.wav','Audio/874.0.wav','Audio/880.0.wav']   
stimulus_array1 = []
stimulus_array2 = []
stimulus_array3 =[]
stimulus_array4 = []
stimulus_array5 =[]
practice_array=['Audio/820.0.wav','Audio/874.0.wav','Audio/826.0.wav','Audio/874.0.wav']
stim_names = [stimulus_array1,stimulus_array2,stimulus_array3,stimulus_array4,stimulus_array5]
practice_answers=['lshift','rshift','lshift','rshift']
answer_array1 = []
answer_array2 = []
answer_array3 = []
answer_array4 = []
answer_array5 = []
stim_answers = [answer_array1,answer_array2,answer_array3,answer_array4,answer_array5]
cntr1 = 0
cntr2 =0
cntr3 = 0
cntr4 = 0
cntr5 = 0
cntr_practice=0
for i in stim_names:
    for row in stim_words:
        i.append(row)
    random.shuffle(i)
cntr = 0
for i in stim_names:
    for f in i:
        if(int(f[6:9])<850):
            stim_answers[cntr].append('lshift')
        elif(int(f[6:9])>=850):
            stim_answers[cntr].append('rshift')
    cntr+=1
name = expInfo['participant'] 
file_name1 = '/Users/cmml/Documents/Pupillometry_Experiment/data/'+name+'stims.npy'
file_name2 = '/Users/cmml/Documents/Pupillometry_Experiment/data/'+name+'stimAnswers.npy'
with open(file_name1, 'wb') as f:
    np.save(f, np.array(stim_names))
with open(file_name2, 'wb') as f:
    np.save(f, np.array(stim_answers))
    



# Initialize components for Routine "Intro_contd"
Intro_contdClock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='This is a calibration script, kindly follow the instructions shown below\n',
    font='Open Sans',
    pos=(0, 0.15), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_8 = keyboard.Keyboard()
sound_31 = sound.Sound(sounds2[0], secs=1.0, stereo=True, hamming=True,
    name='sound_31')
sound_31.setVolume(1.0)
text_10 = visual.TextStim(win=win, name='text_10',
    text='Place your hands over the ‘left shift’ and ‘right shift’ keys.\n\nUse the keyboard ‘left shift’ if you think the tone is lower, ‘right shift’ if you feel the tone is higher to the standard. \n\n\nPress Spacebar to start the calibration.',
    font='Open Sans',
    pos=(0, -0.15), height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "Ready_practice"
Ready_practiceClock = core.Clock()
polygon_26 = visual.ShapeStim(
    win=win, name='polygon_26', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
sound_26 = sound.Sound('Audio/650.o.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_26')
sound_26.setVolume(1.0)

# Initialize components for Routine "reference_practice"
reference_practiceClock = core.Clock()
polygon_27 = visual.ShapeStim(
    win=win, name='polygon_27', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
sound_27 = sound.Sound('Audio/850.0.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_27')
sound_27.setVolume(1.0)

# Initialize components for Routine "comparison_practice"
comparison_practiceClock = core.Clock()
polygon_28 = visual.ShapeStim(
    win=win, name='polygon_28', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
sound_28 = sound.Sound('A', secs=1.0, stereo=True, hamming=True,
    name='sound_28')
sound_28.setVolume(1.0)

# Initialize components for Routine "End_tonepractice"
End_tonepracticeClock = core.Clock()
polygon_29 = visual.ShapeStim(
    win=win, name='polygon_29', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
sound_29 = sound.Sound('Audio/650.o.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_29')
sound_29.setVolume(1.0)
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "feedback_practice"
feedback_practiceClock = core.Clock()
polygon_30 = visual.ShapeStim(
    win=win, name='polygon_30', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
sound_30 = sound.Sound('A', secs=1.0, stereo=True, hamming=True,
    name='sound_30')
sound_30.setVolume(1.0)
\

# Initialize components for Routine "StartWelcome"
StartWelcomeClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()
eyetracking='1'


# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "init_code"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
init_codeComponents = []
for thisComponent in init_codeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
init_codeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "init_code"-------
while continueRoutine:
    # get current time
    t = init_codeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=init_codeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in init_codeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "init_code"-------
for thisComponent in init_codeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "init_code" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Intro_contd"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
sound_31.setSound(sounds2[0], secs=1.0, hamming=True)
sound_31.setVolume(1.0, log=False)
# keep track of which components have finished
Intro_contdComponents = [text_7, key_resp_8, sound_31, text_10]
for thisComponent in Intro_contdComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Intro_contdClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Intro_contd"-------
while continueRoutine:
    # get current time
    t = Intro_contdClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Intro_contdClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_7* updates
    if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_7.frameNStart = frameN  # exact frame index
        text_7.tStart = t  # local t and not account for scr refresh
        text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
        text_7.setAutoDraw(True)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # start/stop sound_31
    if sound_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_31.frameNStart = frameN  # exact frame index
        sound_31.tStart = t  # local t and not account for scr refresh
        sound_31.tStartRefresh = tThisFlipGlobal  # on global time
        sound_31.play(when=win)  # sync with win flip
    if sound_31.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_31.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            sound_31.tStop = t  # not accounting for scr refresh
            sound_31.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_31, 'tStopRefresh')  # time at next scr refresh
            sound_31.stop()
    
    # *text_10* updates
    if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_10.frameNStart = frameN  # exact frame index
        text_10.tStart = t  # local t and not account for scr refresh
        text_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
        text_10.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Intro_contdComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Intro_contd"-------
for thisComponent in Intro_contdComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_7.started', text_7.tStartRefresh)
thisExp.addData('text_7.stopped', text_7.tStopRefresh)
# check responses
if key_resp_8.keys in ['', [], None]:  # No response was made
    key_resp_8.keys = None
thisExp.addData('key_resp_8.keys',key_resp_8.keys)
if key_resp_8.keys != None:  # we had a response
    thisExp.addData('key_resp_8.rt', key_resp_8.rt)
thisExp.addData('key_resp_8.started', key_resp_8.tStartRefresh)
thisExp.addData('key_resp_8.stopped', key_resp_8.tStopRefresh)
thisExp.nextEntry()
sound_31.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_31.started', sound_31.tStartRefresh)
thisExp.addData('sound_31.stopped', sound_31.tStopRefresh)
thisExp.addData('text_10.started', text_10.tStartRefresh)
thisExp.addData('text_10.stopped', text_10.tStopRefresh)
# the Routine "Intro_contd" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_6 = data.TrialHandler(nReps=4.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_6')
thisExp.addLoop(trials_6)  # add the loop to the experiment
thisTrial_6 = trials_6.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_6.rgb)
if thisTrial_6 != None:
    for paramName in thisTrial_6:
        exec('{} = thisTrial_6[paramName]'.format(paramName))

for thisTrial_6 in trials_6:
    currentLoop = trials_6
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_6.rgb)
    if thisTrial_6 != None:
        for paramName in thisTrial_6:
            exec('{} = thisTrial_6[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Ready_practice"-------
    continueRoutine = True
    routineTimer.add(5.000000)
    # update component parameters for each repeat
    sound_26.setSound('Audio/650.o.wav', secs=1.0, hamming=True)
    sound_26.setVolume(1.0, log=False)
    # keep track of which components have finished
    Ready_practiceComponents = [polygon_26, sound_26]
    for thisComponent in Ready_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Ready_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Ready_practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Ready_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Ready_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_26* updates
        if polygon_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_26.frameNStart = frameN  # exact frame index
            polygon_26.tStart = t  # local t and not account for scr refresh
            polygon_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_26, 'tStartRefresh')  # time at next scr refresh
            polygon_26.setAutoDraw(True)
        if polygon_26.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_26.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                polygon_26.tStop = t  # not accounting for scr refresh
                polygon_26.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_26, 'tStopRefresh')  # time at next scr refresh
                polygon_26.setAutoDraw(False)
        # start/stop sound_26
        if sound_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_26.frameNStart = frameN  # exact frame index
            sound_26.tStart = t  # local t and not account for scr refresh
            sound_26.tStartRefresh = tThisFlipGlobal  # on global time
            sound_26.play(when=win)  # sync with win flip
        if sound_26.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_26.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_26.tStop = t  # not accounting for scr refresh
                sound_26.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_26, 'tStopRefresh')  # time at next scr refresh
                sound_26.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Ready_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Ready_practice"-------
    for thisComponent in Ready_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_6.addData('polygon_26.started', polygon_26.tStartRefresh)
    trials_6.addData('polygon_26.stopped', polygon_26.tStopRefresh)
    sound_26.stop()  # ensure sound has stopped at end of routine
    trials_6.addData('sound_26.started', sound_26.tStartRefresh)
    trials_6.addData('sound_26.stopped', sound_26.tStopRefresh)
    
    # ------Prepare to start Routine "reference_practice"-------
    continueRoutine = True
    routineTimer.add(4.000000)
    # update component parameters for each repeat
    sound_27.setSound('Audio/850.0.wav', secs=1.0, hamming=True)
    sound_27.setVolume(1.0, log=False)
    sound_files = practice_array[cntr_practice]
    # keep track of which components have finished
    reference_practiceComponents = [polygon_27, sound_27]
    for thisComponent in reference_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    reference_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "reference_practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = reference_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=reference_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_27* updates
        if polygon_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_27.frameNStart = frameN  # exact frame index
            polygon_27.tStart = t  # local t and not account for scr refresh
            polygon_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_27, 'tStartRefresh')  # time at next scr refresh
            polygon_27.setAutoDraw(True)
        if polygon_27.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_27.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                polygon_27.tStop = t  # not accounting for scr refresh
                polygon_27.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_27, 'tStopRefresh')  # time at next scr refresh
                polygon_27.setAutoDraw(False)
        # start/stop sound_27
        if sound_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_27.frameNStart = frameN  # exact frame index
            sound_27.tStart = t  # local t and not account for scr refresh
            sound_27.tStartRefresh = tThisFlipGlobal  # on global time
            sound_27.play(when=win)  # sync with win flip
        if sound_27.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_27.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_27.tStop = t  # not accounting for scr refresh
                sound_27.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_27, 'tStopRefresh')  # time at next scr refresh
                sound_27.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in reference_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "reference_practice"-------
    for thisComponent in reference_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_6.addData('polygon_27.started', polygon_27.tStartRefresh)
    trials_6.addData('polygon_27.stopped', polygon_27.tStopRefresh)
    sound_27.stop()  # ensure sound has stopped at end of routine
    trials_6.addData('sound_27.started', sound_27.tStartRefresh)
    trials_6.addData('sound_27.stopped', sound_27.tStopRefresh)
    
    # ------Prepare to start Routine "comparison_practice"-------
    continueRoutine = True
    routineTimer.add(4.000000)
    # update component parameters for each repeat
    sound_28.setSound(sound_files, secs=1.0, hamming=True)
    sound_28.setVolume(1.0, log=False)
    # keep track of which components have finished
    comparison_practiceComponents = [polygon_28, sound_28]
    for thisComponent in comparison_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    comparison_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "comparison_practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = comparison_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=comparison_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_28* updates
        if polygon_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_28.frameNStart = frameN  # exact frame index
            polygon_28.tStart = t  # local t and not account for scr refresh
            polygon_28.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_28, 'tStartRefresh')  # time at next scr refresh
            polygon_28.setAutoDraw(True)
        if polygon_28.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_28.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                polygon_28.tStop = t  # not accounting for scr refresh
                polygon_28.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_28, 'tStopRefresh')  # time at next scr refresh
                polygon_28.setAutoDraw(False)
        # start/stop sound_28
        if sound_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_28.frameNStart = frameN  # exact frame index
            sound_28.tStart = t  # local t and not account for scr refresh
            sound_28.tStartRefresh = tThisFlipGlobal  # on global time
            sound_28.play(when=win)  # sync with win flip
        if sound_28.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_28.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_28.tStop = t  # not accounting for scr refresh
                sound_28.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_28, 'tStopRefresh')  # time at next scr refresh
                sound_28.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in comparison_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "comparison_practice"-------
    for thisComponent in comparison_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_6.addData('polygon_28.started', polygon_28.tStartRefresh)
    trials_6.addData('polygon_28.stopped', polygon_28.tStopRefresh)
    sound_28.stop()  # ensure sound has stopped at end of routine
    trials_6.addData('sound_28.started', sound_28.tStartRefresh)
    trials_6.addData('sound_28.stopped', sound_28.tStopRefresh)
    answers = practice_answers[cntr_practice]
    
    # ------Prepare to start Routine "End_tonepractice"-------
    continueRoutine = True
    # update component parameters for each repeat
    sound_29.setSound('Audio/650.o.wav', secs=1.0, hamming=True)
    sound_29.setVolume(1.0, log=False)
    key_resp_10.keys = []
    key_resp_10.rt = []
    _key_resp_10_allKeys = []
    # keep track of which components have finished
    End_tonepracticeComponents = [polygon_29, sound_29, key_resp_10]
    for thisComponent in End_tonepracticeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    End_tonepracticeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "End_tonepractice"-------
    while continueRoutine:
        # get current time
        t = End_tonepracticeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=End_tonepracticeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_29* updates
        if polygon_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_29.frameNStart = frameN  # exact frame index
            polygon_29.tStart = t  # local t and not account for scr refresh
            polygon_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_29, 'tStartRefresh')  # time at next scr refresh
            polygon_29.setAutoDraw(True)
        # start/stop sound_29
        if sound_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_29.frameNStart = frameN  # exact frame index
            sound_29.tStart = t  # local t and not account for scr refresh
            sound_29.tStartRefresh = tThisFlipGlobal  # on global time
            sound_29.play(when=win)  # sync with win flip
        if sound_29.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_29.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_29.tStop = t  # not accounting for scr refresh
                sound_29.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_29, 'tStopRefresh')  # time at next scr refresh
                sound_29.stop()
        
        # *key_resp_10* updates
        waitOnFlip = False
        if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_10.frameNStart = frameN  # exact frame index
            key_resp_10.tStart = t  # local t and not account for scr refresh
            key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
            key_resp_10.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_10.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_10.getKeys(keyList=['lshift','rshift'], waitRelease=False)
            _key_resp_10_allKeys.extend(theseKeys)
            if len(_key_resp_10_allKeys):
                key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
                key_resp_10.rt = _key_resp_10_allKeys[-1].rt
                # was this correct?
                if (key_resp_10.keys == str(answers)) or (key_resp_10.keys == answers):
                    key_resp_10.corr = 1
                else:
                    key_resp_10.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in End_tonepracticeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "End_tonepractice"-------
    for thisComponent in End_tonepracticeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_6.addData('polygon_29.started', polygon_29.tStartRefresh)
    trials_6.addData('polygon_29.stopped', polygon_29.tStopRefresh)
    sound_29.stop()  # ensure sound has stopped at end of routine
    trials_6.addData('sound_29.started', sound_29.tStartRefresh)
    trials_6.addData('sound_29.stopped', sound_29.tStopRefresh)
    # check responses
    if key_resp_10.keys in ['', [], None]:  # No response was made
        key_resp_10.keys = None
        # was no response the correct answer?!
        if str(answers).lower() == 'none':
           key_resp_10.corr = 1;  # correct non-response
        else:
           key_resp_10.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_6 (TrialHandler)
    trials_6.addData('key_resp_10.keys',key_resp_10.keys)
    trials_6.addData('key_resp_10.corr', key_resp_10.corr)
    if key_resp_10.keys != None:  # we had a response
        trials_6.addData('key_resp_10.rt', key_resp_10.rt)
    trials_6.addData('key_resp_10.started', key_resp_10.tStartRefresh)
    trials_6.addData('key_resp_10.stopped', key_resp_10.tStopRefresh)
    # the Routine "End_tonepractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_practice"-------
    continueRoutine = True
    routineTimer.add(7.000000)
    # update component parameters for each repeat
    sound_30.setSound('Audio/right_tick.wav', secs=1.0, hamming=True)
    sound_30.setVolume(1.0, log=False)
    sound = sounds2[cntpracts]
    if key_resp_10.corr:
        cntpracts+=1
    else:
        cntpracts+=1
    
    # keep track of which components have finished
    feedback_practiceComponents = [polygon_30, sound_30]
    for thisComponent in feedback_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedback_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_30* updates
        if polygon_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_30.frameNStart = frameN  # exact frame index
            polygon_30.tStart = t  # local t and not account for scr refresh
            polygon_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_30, 'tStartRefresh')  # time at next scr refresh
            polygon_30.setAutoDraw(True)
        if polygon_30.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_30.tStartRefresh + 7-frameTolerance:
                # keep track of stop time/frame for later
                polygon_30.tStop = t  # not accounting for scr refresh
                polygon_30.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_30, 'tStopRefresh')  # time at next scr refresh
                polygon_30.setAutoDraw(False)
        # start/stop sound_30
        if sound_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_30.frameNStart = frameN  # exact frame index
            sound_30.tStart = t  # local t and not account for scr refresh
            sound_30.tStartRefresh = tThisFlipGlobal  # on global time
            sound_30.play(when=win)  # sync with win flip
        if sound_30.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_30.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_30.tStop = t  # not accounting for scr refresh
                sound_30.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_30, 'tStopRefresh')  # time at next scr refresh
                sound_30.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_practice"-------
    for thisComponent in feedback_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_6.addData('polygon_30.started', polygon_30.tStartRefresh)
    trials_6.addData('polygon_30.stopped', polygon_30.tStopRefresh)
    sound_30.stop()  # ensure sound has stopped at end of routine
    trials_6.addData('sound_30.started', sound_30.tStartRefresh)
    trials_6.addData('sound_30.stopped', sound_30.tStopRefresh)
    cntr_practice+=1
    
    thisExp.nextEntry()
    
# completed 4.0 repeats of 'trials_6'


# ------Prepare to start Routine "StartWelcome"-------
continueRoutine = True
# update component parameters for each repeat
text.setText('Calibration complete, press spacebar and await further instructions\n\n')
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
StartWelcomeComponents = [text, key_resp_2]
for thisComponent in StartWelcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
StartWelcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "StartWelcome"-------
while continueRoutine:
    # get current time
    t = StartWelcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=StartWelcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # was this correct?
            if (key_resp_2.keys == str("'space'")) or (key_resp_2.keys == "'space'"):
                key_resp_2.corr = 1
            else:
                key_resp_2.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in StartWelcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "StartWelcome"-------
for thisComponent in StartWelcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
    # was no response the correct answer?!
    if str("'space'").lower() == 'none':
       key_resp_2.corr = 1;  # correct non-response
    else:
       key_resp_2.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
thisExp.addData('key_resp_2.corr', key_resp_2.corr)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "StartWelcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

/********************* 
 * Pupillometry Test *
 *********************/


// store info about the experiment session:
let expName = 'Pupillometry';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
import * as random from 'random';
import * as xlrd from 'xlrd';
import * as csv from 'csv';
var infile;
random.seed();
infile = "/Users/cmml/Documents/Pupillometry_Experiment/looptemplate3.xlsx";

sounds2 = ["Audio/right_tick.wav", "Audio/wrong_buzz.wav", "Audio/right_tick.wav", "Audio/wrong_buzz.wav"];
cntpracts = 0;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(init_codeRoutineBegin());
flowScheduler.add(init_codeRoutineEachFrame());
flowScheduler.add(init_codeRoutineEnd());
flowScheduler.add(calibrateRoutineBegin());
flowScheduler.add(calibrateRoutineEachFrame());
flowScheduler.add(calibrateRoutineEnd());
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(helloRoutineBegin());
flowScheduler.add(helloRoutineEachFrame());
flowScheduler.add(helloRoutineEnd());
flowScheduler.add(Consent_formRoutineBegin());
flowScheduler.add(Consent_formRoutineEachFrame());
flowScheduler.add(Consent_formRoutineEnd());
flowScheduler.add(Intro_contdRoutineBegin());
flowScheduler.add(Intro_contdRoutineEachFrame());
flowScheduler.add(Intro_contdRoutineEnd());
const trials_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_6LoopBegin(trials_6LoopScheduler));
flowScheduler.add(trials_6LoopScheduler);
flowScheduler.add(trials_6LoopEnd);
flowScheduler.add(StartWelcomeRoutineBegin());
flowScheduler.add(StartWelcomeRoutineEachFrame());
flowScheduler.add(StartWelcomeRoutineEnd());
flowScheduler.add(PupilRoutineBegin());
flowScheduler.add(PupilRoutineEachFrame());
flowScheduler.add(PupilRoutineEnd());
flowScheduler.add(calibrateRoutineBegin());
flowScheduler.add(calibrateRoutineEachFrame());
flowScheduler.add(calibrateRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(stop_pupilRoutineBegin());
flowScheduler.add(stop_pupilRoutineEachFrame());
flowScheduler.add(stop_pupilRoutineEnd());
flowScheduler.add(EndBlockRoutineBegin());
flowScheduler.add(EndBlockRoutineEachFrame());
flowScheduler.add(EndBlockRoutineEnd());
flowScheduler.add(Pupil_2RoutineBegin());
flowScheduler.add(Pupil_2RoutineEachFrame());
flowScheduler.add(Pupil_2RoutineEnd());
flowScheduler.add(calibrateRoutineBegin());
flowScheduler.add(calibrateRoutineEachFrame());
flowScheduler.add(calibrateRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(stop_pupilRoutineBegin());
flowScheduler.add(stop_pupilRoutineEachFrame());
flowScheduler.add(stop_pupilRoutineEnd());
flowScheduler.add(EndBlockRoutineBegin());
flowScheduler.add(EndBlockRoutineEachFrame());
flowScheduler.add(EndBlockRoutineEnd());
flowScheduler.add(Pupil_3RoutineBegin());
flowScheduler.add(Pupil_3RoutineEachFrame());
flowScheduler.add(Pupil_3RoutineEnd());
flowScheduler.add(calibrateRoutineBegin());
flowScheduler.add(calibrateRoutineEachFrame());
flowScheduler.add(calibrateRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(stop_pupilRoutineBegin());
flowScheduler.add(stop_pupilRoutineEachFrame());
flowScheduler.add(stop_pupilRoutineEnd());
flowScheduler.add(EndBlockRoutineBegin());
flowScheduler.add(EndBlockRoutineEachFrame());
flowScheduler.add(EndBlockRoutineEnd());
flowScheduler.add(Pupil_4RoutineBegin());
flowScheduler.add(Pupil_4RoutineEachFrame());
flowScheduler.add(Pupil_4RoutineEnd());
flowScheduler.add(calibrateRoutineBegin());
flowScheduler.add(calibrateRoutineEachFrame());
flowScheduler.add(calibrateRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
flowScheduler.add(stop_pupilRoutineBegin());
flowScheduler.add(stop_pupilRoutineEachFrame());
flowScheduler.add(stop_pupilRoutineEnd());
flowScheduler.add(EndBlockRoutineBegin());
flowScheduler.add(EndBlockRoutineEachFrame());
flowScheduler.add(EndBlockRoutineEnd());
flowScheduler.add(Pupil_5RoutineBegin());
flowScheduler.add(Pupil_5RoutineEachFrame());
flowScheduler.add(Pupil_5RoutineEnd());
flowScheduler.add(calibrateRoutineBegin());
flowScheduler.add(calibrateRoutineEachFrame());
flowScheduler.add(calibrateRoutineEnd());
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);
flowScheduler.add(stop_pupilRoutineBegin());
flowScheduler.add(stop_pupilRoutineEachFrame());
flowScheduler.add(stop_pupilRoutineEnd());
flowScheduler.add(End_ExperimentRoutineBegin());
flowScheduler.add(End_ExperimentRoutineEachFrame());
flowScheduler.add(End_ExperimentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Audio/650.wav', 'path': 'Audio/650.wav'},
    {'name': 'Audio/850.0.wav', 'path': 'Audio/850.0.wav'},
    {'name': 'Audio/right_tick.wav', 'path': 'Audio/right_tick.wav'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "init_code"
  init_codeClock = new util.Clock();
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "calibrate"
  calibrateClock = new util.Clock();
  polygon_31 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_31', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Hello and Welcome!\n\nThis study aims to replicate an oft-cited experiment from 1967 (Hahnemann & Beatty, 1967) but using modern pupillometry hardware and software. \n\nThis study has been reviewed by the Georgia Tech Institutional Review Board (IRB), and has been identified as “Minimal risk research under 45 CFR 46. (Protocol 21153). This study contains neither any personal benefits nor any known risks to you.\n\nThe experiment should take approximately 15 - 20 minutes to complete. Your participation is extremely valuable to us and we thank you for taking the time to help us.\n\nPlease click “CONTINUE” to read the full instructions.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_2',
    text: 'CONTINUE',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.1,
    size: [0.7, 0.2]
  });
  button_2.clock = new util.Clock();
  
  // Initialize components for Routine "hello"
  helloClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Confidentiality: The data from this experiment will be collected anonymously. Collected data will be shared with collaborators at the Georgia Institute of Technology. Data obtained will only be connected to your anonymous participant number, and will be securely stored on a password-protected and encrypted computer for a minimum of 5 years. Your identity is not recorded, nor are you identifiable from the data we record. Neither your identity nor agreement to participate will be disclosed in any publication resulting from this research.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Consent_form"
  Consent_formClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Participant rights: You may refuse or discontinue your voluntary participation in this research study at any time. There is no direct benefit to you in participating in this study. However, only participants’ data who complete the full experiment will be included in the final results and dissemination.\nContacts and Questions: For questions, concerns, or complaints about the study, you may contact the PI, Dr. Claire Arthur at: claire.arthur[at]gatech.edu, or you may directly reach out to Georgia Tech’s Office of Research Integrity by contacting irb[at]gatech.edu.\nFeel free to print or save a copy of this page.\n\nBy providing consent, you are agreeing to participate. Please click “I Consent” to read the full instructions and begin the practice trials.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'I consent',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.05,
    size: [0.28, 0.1]
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "Intro_contd"
  Intro_contdClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: ' A fixation cross appears on the screen and you will have to maintain your gaze on the cross for the duration of the experiment as much as possible. Each block of this experiment consists of 11 tones, there are a total of 5 blocks.\nThe time between blocks is used to give participants a break from the fixation cross. All cues to perform tasks are presented aurally. First, a "ready tone" tells you that the trial is starting. After 2-4s you hear a standard tone of 850 Hz, followed by a randomly selected interval of silence lasting between 2-6 seconds, followed by a comparison tone (range from 820-880 Hz), followed by a 4 second pause, followed by a "response tone" which tells you to enter your response\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_31 = new sound.Sound({
    win: psychoJS.window,
    value: sounds2[0],
    secs: 1.0,
    });
  sound_31.setVolume(1.0);
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Place your hands over the ‘left shift’ and ‘right shift’ keys.\n\nUse the keyboard ‘left shift’ if you think the tone is lower, ‘right shift’ if you feel the tone is higher to the standard. \n\n\nPress Spacebar to start the practice trials.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Ready_practice"
  Ready_practiceClock = new util.Clock();
  polygon_26 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_26', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_26 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.0.wav',
    secs: 1.0,
    });
  sound_26.setVolume(1.0);
  // Initialize components for Routine "reference_practice"
  reference_practiceClock = new util.Clock();
  polygon_27 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_27', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_27 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/850.0.wav',
    secs: 1.0,
    });
  sound_27.setVolume(1.0);
  // Initialize components for Routine "comparison_practice"
  comparison_practiceClock = new util.Clock();
  polygon_28 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_28', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_28 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_28.setVolume(1.0);
  // Initialize components for Routine "End_tonepractice"
  End_tonepracticeClock = new util.Clock();
  polygon_29 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_29', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_29 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_29.setVolume(1.0);
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_practice"
  feedback_practiceClock = new util.Clock();
  polygon_30 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_30', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_30 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_30.setVolume(1.0);
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "StartWelcome"
  StartWelcomeClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  eyetracking = "1";
  
  // Initialize components for Routine "Pupil"
  PupilClock = new util.Clock();
  if ((eyetracking === "1")) {
      import * as zmq from 'zmq';
      import * as serializer from 'msgpack';
      import {sleep, time} from 'time';
      ctx = new zmq.Context();
      pupil_remote = new zmq.Socket(ctx, zmq.REQ);
      pupil_remote.connect("tcp://127.0.0.1:50020");
      pupil_remote.send_string("PUB_PORT");
      pub_port = pupil_remote.recv_string();
      pub_socket = new zmq.Socket(ctx, zmq.PUB);
      pub_socket.connect(("tcp://127.0.0.1:" + pub_port.toString()));
      time_fn = core.monotonicClock.getTime;
      pupil_remote.send_string(("T " + time_fn().toString()));
      console.log(pupil_remote.recv_string());
      sleep(2.0);
      function notify(notification) {
          /* Sends ``notification`` to Pupil Remote */
          var payload, topic;
          topic = ("notify." + notification["subject"]);
          payload = serializer.dumps(notification, {"use_bin_type": true});
          pupil_remote.send_string(topic, {"flags": zmq.SNDMORE});
          pupil_remote.send(payload);
          return pupil_remote.recv_string();
      }
      function send_trigger(trigger) {
          var payload;
          payload = serializer.dumps(trigger, {"use_bin_type": true});
          pub_socket.send_string(trigger["topic"], {"flags": zmq.SNDMORE});
          pub_socket.send(payload);
      }
      notify({"subject": "start_plugin", "name": "Annotation_Capture", "args": {}});
      pupil_remote.send_string("R pupil_Labs");
      console.log(pupil_remote.recv_string());
      sleep(1.0);
      function new_trigger(label, duration) {
          return {"topic": "annotation", "label": label, "timestamp": time_fn(), "duration": duration};
      }
      label = "start_experiment";
      duration = 0.0;
      minimal_trigger = new_trigger(label, duration);
      send_trigger(minimal_trigger);
      sleep(1.0);
  } else {
      continueRoutine = false;
  }
  local_clock = time.perf_counter
  // Initialize components for Routine "Ready_tone"
  Ready_toneClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.3, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.0.wav',
    secs: 1.0,
    });
  sound_1.setVolume(1.0);
  // Initialize components for Routine "reference_tone"
  reference_toneClock = new util.Clock();
  polygon_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_3', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_2 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/850.0.wav',
    secs: 1.0,
    });
  sound_2.setVolume(1.0);
  // Initialize components for Routine "comparison_tone"
  comparison_toneClock = new util.Clock();
  polygon_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_4', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_3.setVolume(1.0);
  // Initialize components for Routine "End_tone"
  End_toneClock = new util.Clock();
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_4 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_4.setVolume(1.0);
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  sounds = ["Audio/right_tick.wav", "Audio/wrong_buzz.wav"];
  
  polygon_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_5', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  sound_5 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_5.setVolume(1.0);
  // Initialize components for Routine "stop_pupil"
  stop_pupilClock = new util.Clock();
  // Initialize components for Routine "EndBlock"
  EndBlockClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Block Complete, You can take some time to look away from the screen and relax your eyes.\nPress spacebar to continue when ready\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pupil_2"
  Pupil_2Clock = new util.Clock();
  // Initialize components for Routine "Ready_tone2_2"
  Ready_tone2_2Clock = new util.Clock();
  polygon_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_6', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_6 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.0.wav',
    secs: 1.0,
    });
  sound_6.setVolume(1.0);
  // Initialize components for Routine "reference_tone2"
  reference_tone2Clock = new util.Clock();
  polygon_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_7', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_7 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/850.0.wav',
    secs: 1.0,
    });
  sound_7.setVolume(1.0);
  // Initialize components for Routine "comparison_tone2"
  comparison_tone2Clock = new util.Clock();
  polygon_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_8', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_8 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_8.setVolume(1.0);
  // Initialize components for Routine "End_tone2_2"
  End_tone2_2Clock = new util.Clock();
  polygon_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_9', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_9 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_9.setVolume(1.0);
  // Initialize components for Routine "feedback2_2"
  feedback2_2Clock = new util.Clock();
  polygon_24 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_24', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_24 = new sound.Sound({
    win: psychoJS.window,
    value: sound,
    secs: (- 1),
    });
  sound_24.setVolume(1.0);
  // Initialize components for Routine "Pupil_3"
  Pupil_3Clock = new util.Clock();
  // Initialize components for Routine "Ready_tone3"
  Ready_tone3Clock = new util.Clock();
  polygon_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_10', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_10 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.0.wav',
    secs: 1.0,
    });
  sound_10.setVolume(1.0);
  // Initialize components for Routine "reference_tone3"
  reference_tone3Clock = new util.Clock();
  polygon_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_11', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_11 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/850.0.wav',
    secs: 1.0,
    });
  sound_11.setVolume(1.0);
  // Initialize components for Routine "comparison_tone3"
  comparison_tone3Clock = new util.Clock();
  polygon_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_12', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_12 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_12.setVolume(1.0);
  // Initialize components for Routine "End_tone3"
  End_tone3Clock = new util.Clock();
  polygon_13 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_13', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_13 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_13.setVolume(1.0);
  // Initialize components for Routine "feedback_3"
  feedback_3Clock = new util.Clock();
  polygon_25 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_25', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_25 = new sound.Sound({
    win: psychoJS.window,
    value: sound,
    secs: (- 1),
    });
  sound_25.setVolume(1.0);
  // Initialize components for Routine "Pupil_4"
  Pupil_4Clock = new util.Clock();
  // Initialize components for Routine "Ready_Tone4"
  Ready_Tone4Clock = new util.Clock();
  polygon_14 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_14', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_14 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.0.wav',
    secs: 1.0,
    });
  sound_14.setVolume(0.8);
  // Initialize components for Routine "Reference_tone4"
  Reference_tone4Clock = new util.Clock();
  polygon_15 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_15', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_15 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/850.0.wav',
    secs: 1.0,
    });
  sound_15.setVolume(1.0);
  // Initialize components for Routine "comparison_tone4"
  comparison_tone4Clock = new util.Clock();
  polygon_16 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_16', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_16 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_16.setVolume(1.0);
  // Initialize components for Routine "End_tone4"
  End_tone4Clock = new util.Clock();
  sound_17 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_17.setVolume(1.0);
  polygon_17 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_17', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_4"
  feedback_4Clock = new util.Clock();
  sounds = ["Audio/right_tick.wav", "Audio/wrong_buzz.wav"];
  
  polygon_18 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_18', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  sound_18 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_18.setVolume(1.0);
  // Initialize components for Routine "Pupil_5"
  Pupil_5Clock = new util.Clock();
  // Initialize components for Routine "Ready_tone5"
  Ready_tone5Clock = new util.Clock();
  polygon_19 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_19', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_19 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_19.setVolume(1.0);
  // Initialize components for Routine "reference_tone5"
  reference_tone5Clock = new util.Clock();
  polygon_20 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_20', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_20 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/850.0.wav',
    secs: 1.0,
    });
  sound_20.setVolume(1.0);
  // Initialize components for Routine "comparison_tone5"
  comparison_tone5Clock = new util.Clock();
  polygon_21 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_21', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_21 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.0,
    });
  sound_21.setVolume(1.0);
  // Initialize components for Routine "End_tone5"
  End_tone5Clock = new util.Clock();
  polygon_22 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_22', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sound_22 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/650.wav',
    secs: 1.0,
    });
  sound_22.setVolume(1.0);
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback5"
  feedback5Clock = new util.Clock();
  polygon_23 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_23', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  sounds = ["Audio/right_tick.wav", "Audio/wrong_buzz.wav"];
  
  sound_23 = new sound.Sound({
    win: psychoJS.window,
    value: sound,
    secs: (- 1),
    });
  sound_23.setVolume(1.0);
  // Initialize components for Routine "End_Experiment"
  End_ExperimentClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Thank You For Taking Part In This Experiment\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function init_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'init_code'-------
    t = 0;
    init_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    init_codeComponents = [];
    
    init_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function init_codeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'init_code'-------
    // get current time
    t = init_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    init_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function init_codeRoutineEnd() {
  return async function () {
    //------Ending Routine 'init_code'-------
    init_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "init_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function calibrateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'calibrate'-------
    t = 0;
    calibrateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    calibrateComponents = [];
    calibrateComponents.push(polygon_31);
    
    calibrateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function calibrateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'calibrate'-------
    // get current time
    t = calibrateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_31* updates
    if (t >= 0.0 && polygon_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_31.tStart = t;  // (not accounting for frame time here)
      polygon_31.frameNStart = frameN;  // exact frame index
      
      polygon_31.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_31.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    calibrateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function calibrateRoutineEnd() {
  return async function () {
    //------Ending Routine 'calibrate'-------
    calibrateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function IntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Introduction'-------
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(text_6);
    IntroductionComponents.push(button_2);
    
    IntroductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function IntroductionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Introduction'-------
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *button_2* updates
    if (t >= 0 && button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_2.tStart = t;  // (not accounting for frame time here)
      button_2.frameNStart = frameN;  // exact frame index
      
      button_2.setAutoDraw(true);
    }

    if (button_2.status === PsychoJS.Status.STARTED) {
      // check whether button_2 has been pressed
      if (button_2.isClicked) {
        if (!button_2.wasClicked) {
          // store time of first click
          button_2.timesOn.push(button_2.clock.getTime());
          button_2.numClicks += 1;
          // store time clicked until
          button_2.timesOff.push(button_2.clock.getTime());
        } else {
          // update time clicked until;
          button_2.timesOff[button_2.timesOff.length - 1] = button_2.clock.getTime();
        }
        if (!button_2.wasClicked) {
          // end routine when button_2 is clicked
          continueRoutine = false;
          null;
        }
        // if button_2 is still clicked next frame, it is not a new click
        button_2.wasClicked = true;
      } else {
        // if button_2 is clicked next frame, it is a new click
        button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_2 hasn't started / has finished
      button_2.clock.reset();
      // if button_2 is clicked next frame, it is a new click
      button_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function IntroductionRoutineEnd() {
  return async function () {
    //------Ending Routine 'Introduction'-------
    IntroductionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('button_2.numClicks', button_2.numClicks);
    psychoJS.experiment.addData('button_2.timesOn', button_2.timesOn);
    psychoJS.experiment.addData('button_2.timesOff', button_2.timesOff);
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function helloRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'hello'-------
    t = 0;
    helloClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(15.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    helloComponents = [];
    helloComponents.push(text_8);
    
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function helloRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'hello'-------
    // get current time
    t = helloClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function helloRoutineEnd() {
  return async function () {
    //------Ending Routine 'hello'-------
    helloComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function Consent_formRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Consent_form'-------
    t = 0;
    Consent_formClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    Consent_formComponents = [];
    Consent_formComponents.push(text_4);
    Consent_formComponents.push(button);
    
    Consent_formComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Consent_formRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Consent_form'-------
    // get current time
    t = Consent_formClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          button.numClicks += 1;
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          null;
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Consent_formComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Consent_formRoutineEnd() {
  return async function () {
    //------Ending Routine 'Consent_form'-------
    Consent_formComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "Consent_form" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Intro_contdRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_contd'-------
    t = 0;
    Intro_contdClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    sound_31.secs=1.0;
    sound_31.setVolume(1.0);
    // keep track of which components have finished
    Intro_contdComponents = [];
    Intro_contdComponents.push(text_7);
    Intro_contdComponents.push(key_resp_8);
    Intro_contdComponents.push(sound_31);
    Intro_contdComponents.push(text_10);
    
    Intro_contdComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Intro_contdRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_contd'-------
    // get current time
    t = Intro_contdClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_31
    if (t >= 0.0 && sound_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_31.tStart = t;  // (not accounting for frame time here)
      sound_31.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_31.play(); });  // screen flip
      sound_31.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_31.stop();  // stop the sound (if longer than duration)
      }
      sound_31.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Intro_contdComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Intro_contdRoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_contd'-------
    Intro_contdComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    sound_31.stop();  // ensure sound has stopped at end of routine
    // the Routine "Intro_contd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_6.forEach(function() {
      const snapshot = trials_6.getSnapshot();
    
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(Ready_practiceRoutineBegin(snapshot));
      trials_6LoopScheduler.add(Ready_practiceRoutineEachFrame());
      trials_6LoopScheduler.add(Ready_practiceRoutineEnd());
      trials_6LoopScheduler.add(reference_practiceRoutineBegin(snapshot));
      trials_6LoopScheduler.add(reference_practiceRoutineEachFrame());
      trials_6LoopScheduler.add(reference_practiceRoutineEnd());
      trials_6LoopScheduler.add(comparison_practiceRoutineBegin(snapshot));
      trials_6LoopScheduler.add(comparison_practiceRoutineEachFrame());
      trials_6LoopScheduler.add(comparison_practiceRoutineEnd());
      trials_6LoopScheduler.add(End_tonepracticeRoutineBegin(snapshot));
      trials_6LoopScheduler.add(End_tonepracticeRoutineEachFrame());
      trials_6LoopScheduler.add(End_tonepracticeRoutineEnd());
      trials_6LoopScheduler.add(feedback_practiceRoutineBegin(snapshot));
      trials_6LoopScheduler.add(feedback_practiceRoutineEachFrame());
      trials_6LoopScheduler.add(feedback_practiceRoutineEnd());
      trials_6LoopScheduler.add(endLoopIteration(trials_6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_6LoopEnd() {
  psychoJS.experiment.removeLoop(trials_6);

  return Scheduler.Event.NEXT;
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 11, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(Ready_toneRoutineBegin(snapshot));
      trialsLoopScheduler.add(Ready_toneRoutineEachFrame());
      trialsLoopScheduler.add(Ready_toneRoutineEnd());
      trialsLoopScheduler.add(reference_toneRoutineBegin(snapshot));
      trialsLoopScheduler.add(reference_toneRoutineEachFrame());
      trialsLoopScheduler.add(reference_toneRoutineEnd());
      trialsLoopScheduler.add(comparison_toneRoutineBegin(snapshot));
      trialsLoopScheduler.add(comparison_toneRoutineEachFrame());
      trialsLoopScheduler.add(comparison_toneRoutineEnd());
      trialsLoopScheduler.add(End_toneRoutineBegin(snapshot));
      trialsLoopScheduler.add(End_toneRoutineEachFrame());
      trialsLoopScheduler.add(End_toneRoutineEnd());
      trialsLoopScheduler.add(feedback_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(feedback_2RoutineEachFrame());
      trialsLoopScheduler.add(feedback_2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 11, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(Ready_tone2_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Ready_tone2_2RoutineEachFrame());
      trials_2LoopScheduler.add(Ready_tone2_2RoutineEnd());
      trials_2LoopScheduler.add(reference_tone2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(reference_tone2RoutineEachFrame());
      trials_2LoopScheduler.add(reference_tone2RoutineEnd());
      trials_2LoopScheduler.add(comparison_tone2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(comparison_tone2RoutineEachFrame());
      trials_2LoopScheduler.add(comparison_tone2RoutineEnd());
      trials_2LoopScheduler.add(End_tone2_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(End_tone2_2RoutineEachFrame());
      trials_2LoopScheduler.add(End_tone2_2RoutineEnd());
      trials_2LoopScheduler.add(feedback2_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(feedback2_2RoutineEachFrame());
      trials_2LoopScheduler.add(feedback2_2RoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 11, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(Ready_tone3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(Ready_tone3RoutineEachFrame());
      trials_3LoopScheduler.add(Ready_tone3RoutineEnd());
      trials_3LoopScheduler.add(reference_tone3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(reference_tone3RoutineEachFrame());
      trials_3LoopScheduler.add(reference_tone3RoutineEnd());
      trials_3LoopScheduler.add(comparison_tone3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(comparison_tone3RoutineEachFrame());
      trials_3LoopScheduler.add(comparison_tone3RoutineEnd());
      trials_3LoopScheduler.add(End_tone3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(End_tone3RoutineEachFrame());
      trials_3LoopScheduler.add(End_tone3RoutineEnd());
      trials_3LoopScheduler.add(feedback_3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(feedback_3RoutineEachFrame());
      trials_3LoopScheduler.add(feedback_3RoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}

function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 11, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      const snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(Ready_Tone4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(Ready_Tone4RoutineEachFrame());
      trials_4LoopScheduler.add(Ready_Tone4RoutineEnd());
      trials_4LoopScheduler.add(Reference_tone4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(Reference_tone4RoutineEachFrame());
      trials_4LoopScheduler.add(Reference_tone4RoutineEnd());
      trials_4LoopScheduler.add(comparison_tone4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(comparison_tone4RoutineEachFrame());
      trials_4LoopScheduler.add(comparison_tone4RoutineEnd());
      trials_4LoopScheduler.add(End_tone4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(End_tone4RoutineEachFrame());
      trials_4LoopScheduler.add(End_tone4RoutineEnd());
      trials_4LoopScheduler.add(feedback_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineEachFrame());
      trials_4LoopScheduler.add(feedback_4RoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}

function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 11, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_5.forEach(function() {
      const snapshot = trials_5.getSnapshot();
    
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(Ready_tone5RoutineBegin(snapshot));
      trials_5LoopScheduler.add(Ready_tone5RoutineEachFrame());
      trials_5LoopScheduler.add(Ready_tone5RoutineEnd());
      trials_5LoopScheduler.add(reference_tone5RoutineBegin(snapshot));
      trials_5LoopScheduler.add(reference_tone5RoutineEachFrame());
      trials_5LoopScheduler.add(reference_tone5RoutineEnd());
      trials_5LoopScheduler.add(comparison_tone5RoutineBegin(snapshot));
      trials_5LoopScheduler.add(comparison_tone5RoutineEachFrame());
      trials_5LoopScheduler.add(comparison_tone5RoutineEnd());
      trials_5LoopScheduler.add(End_tone5RoutineBegin(snapshot));
      trials_5LoopScheduler.add(End_tone5RoutineEachFrame());
      trials_5LoopScheduler.add(End_tone5RoutineEnd());
      trials_5LoopScheduler.add(feedback5RoutineBegin(snapshot));
      trials_5LoopScheduler.add(feedback5RoutineEachFrame());
      trials_5LoopScheduler.add(feedback5RoutineEnd());
      trials_5LoopScheduler.add(endLoopIteration(trials_5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_5LoopEnd() {
  psychoJS.experiment.removeLoop(trials_5);

  return Scheduler.Event.NEXT;
}

function Ready_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ready_practice'-------
    t = 0;
    Ready_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    sound_26.secs=1.0;
    sound_26.setVolume(1.0);
    // keep track of which components have finished
    Ready_practiceComponents = [];
    Ready_practiceComponents.push(polygon_26);
    Ready_practiceComponents.push(sound_26);
    
    Ready_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Ready_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ready_practice'-------
    // get current time
    t = Ready_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_26* updates
    if (t >= 0.0 && polygon_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_26.tStart = t;  // (not accounting for frame time here)
      polygon_26.frameNStart = frameN;  // exact frame index
      
      polygon_26.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_26.setAutoDraw(false);
    }
    // start/stop sound_26
    if (t >= 0.0 && sound_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_26.tStart = t;  // (not accounting for frame time here)
      sound_26.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_26.play(); });  // screen flip
      sound_26.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_26.stop();  // stop the sound (if longer than duration)
      }
      sound_26.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ready_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ready_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'Ready_practice'-------
    Ready_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_26.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}

function reference_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'reference_practice'-------
    t = 0;
    reference_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_27.secs=1.0;
    sound_27.setVolume(1.0);
    sound_files = practice_array[cntr_practice];
    
    // keep track of which components have finished
    reference_practiceComponents = [];
    reference_practiceComponents.push(polygon_27);
    reference_practiceComponents.push(sound_27);
    
    reference_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function reference_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'reference_practice'-------
    // get current time
    t = reference_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_27* updates
    if (t >= 0.0 && polygon_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_27.tStart = t;  // (not accounting for frame time here)
      polygon_27.frameNStart = frameN;  // exact frame index
      
      polygon_27.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_27.setAutoDraw(false);
    }
    // start/stop sound_27
    if (t >= 0.0 && sound_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_27.tStart = t;  // (not accounting for frame time here)
      sound_27.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_27.play(); });  // screen flip
      sound_27.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_27.stop();  // stop the sound (if longer than duration)
      }
      sound_27.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reference_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reference_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'reference_practice'-------
    reference_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_27.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}

function comparison_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'comparison_practice'-------
    t = 0;
    comparison_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_28 = new sound.Sound({
    win: psychoJS.window,
    value: sound_files,
    secs: 1.0,
    });
    sound_28.secs=1.0;
    sound_28.setVolume(1.0);
    // keep track of which components have finished
    comparison_practiceComponents = [];
    comparison_practiceComponents.push(polygon_28);
    comparison_practiceComponents.push(sound_28);
    
    comparison_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function comparison_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'comparison_practice'-------
    // get current time
    t = comparison_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_28* updates
    if (t >= 0.0 && polygon_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_28.tStart = t;  // (not accounting for frame time here)
      polygon_28.frameNStart = frameN;  // exact frame index
      
      polygon_28.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_28.setAutoDraw(false);
    }
    // start/stop sound_28
    if (t >= 0.0 && sound_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_28.tStart = t;  // (not accounting for frame time here)
      sound_28.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_28.play(); });  // screen flip
      sound_28.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_28.stop();  // stop the sound (if longer than duration)
      }
      sound_28.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comparison_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function comparison_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'comparison_practice'-------
    comparison_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_28.stop();  // ensure sound has stopped at end of routine
    answers = practice_answers[cntr_practice];
    
    return Scheduler.Event.NEXT;
  };
}

function End_tonepracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_tonepractice'-------
    t = 0;
    End_tonepracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_29.secs=1.0;
    sound_29.setVolume(1.0);
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    End_tonepracticeComponents = [];
    End_tonepracticeComponents.push(polygon_29);
    End_tonepracticeComponents.push(sound_29);
    End_tonepracticeComponents.push(key_resp_10);
    
    End_tonepracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_tonepracticeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_tonepractice'-------
    // get current time
    t = End_tonepracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_29* updates
    if (t >= 0.0 && polygon_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_29.tStart = t;  // (not accounting for frame time here)
      polygon_29.frameNStart = frameN;  // exact frame index
      
      polygon_29.setAutoDraw(true);
    }

    // start/stop sound_29
    if (t >= 0.0 && sound_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_29.tStart = t;  // (not accounting for frame time here)
      sound_29.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_29.play(); });  // screen flip
      sound_29.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_29.stop();  // stop the sound (if longer than duration)
      }
      sound_29.status = PsychoJS.Status.FINISHED;
    }
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_10.keys == answers) {
            key_resp_10.corr = 1;
        } else {
            key_resp_10.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_tonepracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_tonepracticeRoutineEnd() {
  return async function () {
    //------Ending Routine 'End_tonepractice'-------
    End_tonepracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_29.stop();  // ensure sound has stopped at end of routine
    // was no response the correct answer?!
    if (key_resp_10.keys === undefined) {
      if (['None','none',undefined].includes(answers)) {
         key_resp_10.corr = 1;  // correct non-response
      } else {
         key_resp_10.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    psychoJS.experiment.addData('key_resp_10.corr', key_resp_10.corr);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "End_tonepractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function feedback_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_practice'-------
    t = 0;
    feedback_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    sound_30 = new sound.Sound({
    win: psychoJS.window,
    value: 'Audio/right_tick.wav',
    secs: 1.0,
    });
    sound_30.secs=1.0;
    sound_30.setVolume(1.0);
    sound = sounds2[cntpracts];
    if (key_resp_10.corr) {
        cntpracts += 1;
    } else {
        cntpracts += 1;
    }
    
    // keep track of which components have finished
    feedback_practiceComponents = [];
    feedback_practiceComponents.push(polygon_30);
    feedback_practiceComponents.push(sound_30);
    
    feedback_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_practice'-------
    // get current time
    t = feedback_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_30* updates
    if (t >= 0.0 && polygon_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_30.tStart = t;  // (not accounting for frame time here)
      polygon_30.frameNStart = frameN;  // exact frame index
      
      polygon_30.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_30.setAutoDraw(false);
    }
    // start/stop sound_30
    if (t >= 0.0 && sound_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_30.tStart = t;  // (not accounting for frame time here)
      sound_30.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_30.play(); });  // screen flip
      sound_30.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_30.stop();  // stop the sound (if longer than duration)
      }
      sound_30.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_practice'-------
    feedback_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_30.stop();  // ensure sound has stopped at end of routine
    cntr_practice += 1;
    
    return Scheduler.Event.NEXT;
  };
}

function StartWelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'StartWelcome'-------
    t = 0;
    StartWelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text.setText('That concludes the end of the practice block.\nYou can take some time to look away from the screen and relax your eyes.\n\nPlease press Spacebar to continue the experiment.\n');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    StartWelcomeComponents = [];
    StartWelcomeComponents.push(text);
    StartWelcomeComponents.push(key_resp_2);
    
    StartWelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function StartWelcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'StartWelcome'-------
    // get current time
    t = StartWelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_2.keys == "'space'") {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartWelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function StartWelcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'StartWelcome'-------
    StartWelcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes("'space'")) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "StartWelcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function PupilRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Pupil'-------
    t = 0;
    PupilClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    PupilComponents = [];
    
    PupilComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function PupilRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Pupil'-------
    // get current time
    t = PupilClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PupilComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function PupilRoutineEnd() {
  return async function () {
    //------Ending Routine 'Pupil'-------
    PupilComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Pupil" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Ready_toneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ready_tone'-------
    t = 0;
    Ready_toneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_1.secs=1.0;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    Ready_toneComponents = [];
    Ready_toneComponents.push(polygon);
    Ready_toneComponents.push(sound_1);
    
    Ready_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Ready_toneRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ready_tone'-------
    // get current time
    t = Ready_toneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + wait_ready - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
      }
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ready_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ready_toneRoutineEnd() {
  return async function () {
    //------Ending Routine 'Ready_tone'-------
    Ready_toneComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_1.stop();  // ensure sound has stopped at end of routine
    // the Routine "Ready_tone" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reference_toneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'reference_tone'-------
    t = 0;
    reference_toneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_2.secs=1.0;
    sound_2.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Reference_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    reference_toneComponents = [];
    reference_toneComponents.push(polygon_3);
    reference_toneComponents.push(sound_2);
    
    reference_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function reference_toneRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'reference_tone'-------
    // get current time
    t = reference_toneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_3.setAutoDraw(false);
    }
    // start/stop sound_2
    if (t >= 0.0 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_2.stop();  // stop the sound (if longer than duration)
      }
      sound_2.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reference_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reference_toneRoutineEnd() {
  return async function () {
    //------Ending Routine 'reference_tone'-------
    reference_toneComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_2.stop();  // ensure sound has stopped at end of routine
    sound_files = stimulus_array1[cntr1];
    
    return Scheduler.Event.NEXT;
  };
}

function comparison_toneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'comparison_tone'-------
    t = 0;
    comparison_toneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: sound_files,
    secs: 1.0,
    });
    sound_3.secs=1.0;
    sound_3.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "comparison_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    comparison_toneComponents = [];
    comparison_toneComponents.push(polygon_4);
    comparison_toneComponents.push(sound_3);
    
    comparison_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function comparison_toneRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'comparison_tone'-------
    // get current time
    t = comparison_toneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_4* updates
    if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_4.setAutoDraw(false);
    }
    // start/stop sound_3
    if (t >= 0.0 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
      }
      sound_3.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comparison_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function comparison_toneRoutineEnd() {
  return async function () {
    //------Ending Routine 'comparison_tone'-------
    comparison_toneComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_3.stop();  // ensure sound has stopped at end of routine
    find_it = 0;
    answers = answer_array1[cntr1];
    if ((answers === "equal")) {
        find_it = 1;
    }
    cntr1 += 1;
    console.log(cntr1);
    
    return Scheduler.Event.NEXT;
  };
}

function End_toneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_tone'-------
    t = 0;
    End_toneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    sound_4.secs=1.0;
    sound_4.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Answer_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    
    // keep track of which components have finished
    End_toneComponents = [];
    End_toneComponents.push(polygon_2);
    End_toneComponents.push(key_resp);
    End_toneComponents.push(sound_4);
    
    End_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_toneRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_tone'-------
    // get current time
    t = End_toneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == answers) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_4
    if (t >= 0.0 && sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_4.tStart = t;  // (not accounting for frame time here)
      sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_4.play(); });  // screen flip
      sound_4.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_4.stop();  // stop the sound (if longer than duration)
      }
      sound_4.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_toneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_toneRoutineEnd() {
  return async function () {
    //------Ending Routine 'End_tone'-------
    End_toneComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(answers)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    sound_4.stop();  // ensure sound has stopped at end of routine
    // the Routine "End_tone" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function feedback_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_2'-------
    t = 0;
    feedback_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp.corr) {
        sound = sounds[0];
    } else {
        if ((find_it === 1)) {
            sound = sounds[0];
        } else {
            sound = sounds[1];
        }
    }
    next_wait = np.random.choice(np.arange(6, 11), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "feedback_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_5 = new sound.Sound({
    win: psychoJS.window,
    value: sound,
    secs: -1,
    });
    sound_5.setVolume(1.0);
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(polygon_5);
    feedback_2Components.push(sound_5);
    
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_2'-------
    // get current time
    t = feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_5* updates
    if (t >= 0.0 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_5.tStart = t;  // (not accounting for frame time here)
      polygon_5.frameNStart = frameN;  // exact frame index
      
      polygon_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + next_wait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_5.setAutoDraw(false);
    }
    // start/stop sound_5
    if (t >= 0.0 && sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_5.tStart = t;  // (not accounting for frame time here)
      sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_5.play(); });  // screen flip
      sound_5.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_5.getDuration() + sound_5.tStart)     && sound_5.status === PsychoJS.Status.STARTED) {
      sound_5.stop();  // stop the sound (if longer than duration)
      sound_5.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_2'-------
    feedback_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_5.stop();  // ensure sound has stopped at end of routine
    // the Routine "feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function stop_pupilRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stop_pupil'-------
    t = 0;
    stop_pupilClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    time_fn = core.monotonicClock.getTime;
    label = "End_of_Block";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(2.0);
    pupil_remote.send_string("r");
    console.log(pupil_remote.recv_string());
    
    // keep track of which components have finished
    stop_pupilComponents = [];
    
    stop_pupilComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function stop_pupilRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stop_pupil'-------
    // get current time
    t = stop_pupilClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stop_pupilComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function stop_pupilRoutineEnd() {
  return async function () {
    //------Ending Routine 'stop_pupil'-------
    stop_pupilComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stop_pupil" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function EndBlockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'EndBlock'-------
    t = 0;
    EndBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    EndBlockComponents = [];
    EndBlockComponents.push(text_2);
    EndBlockComponents.push(key_resp_3);
    
    EndBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function EndBlockRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'EndBlock'-------
    // get current time
    t = EndBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_3.keys == "'space'") {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function EndBlockRoutineEnd() {
  return async function () {
    //------Ending Routine 'EndBlock'-------
    EndBlockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes("'space'")) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "EndBlock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Pupil_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Pupil_2'-------
    t = 0;
    Pupil_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((eyetracking === "1")) {
        time_fn = core.monotonicClock.getTime;
        name = expInfo["participant"];
        rstring = "R ";
        pupil_remote.send_string(rstring);
        console.log(pupil_remote.recv_string());
        label = "Begin Block2";
        duration = 0.0;
        minimal_trigger = new_trigger(label, duration);
        send_trigger(minimal_trigger);
        sleep(0.25);
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    Pupil_2Components = [];
    
    Pupil_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Pupil_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Pupil_2'-------
    // get current time
    t = Pupil_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pupil_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Pupil_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Pupil_2'-------
    Pupil_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Pupil_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Ready_tone2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ready_tone2_2'-------
    t = 0;
    Ready_tone2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wait_ready = np.random.choice(np.arange(2, 7), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "Ready_Tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_6.secs=1.0;
    sound_6.setVolume(1.0);
    // keep track of which components have finished
    Ready_tone2_2Components = [];
    Ready_tone2_2Components.push(polygon_6);
    Ready_tone2_2Components.push(sound_6);
    
    Ready_tone2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Ready_tone2_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ready_tone2_2'-------
    // get current time
    t = Ready_tone2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_6* updates
    if (t >= 0.0 && polygon_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_6.tStart = t;  // (not accounting for frame time here)
      polygon_6.frameNStart = frameN;  // exact frame index
      
      polygon_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + wait_ready - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_6.setAutoDraw(false);
    }
    // start/stop sound_6
    if (t >= 0.0 && sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_6.tStart = t;  // (not accounting for frame time here)
      sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_6.play(); });  // screen flip
      sound_6.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_6.stop();  // stop the sound (if longer than duration)
      }
      sound_6.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ready_tone2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ready_tone2_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Ready_tone2_2'-------
    Ready_tone2_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_6.stop();  // ensure sound has stopped at end of routine
    // the Routine "Ready_tone2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reference_tone2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'reference_tone2'-------
    t = 0;
    reference_tone2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_7.secs=1.0;
    sound_7.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Reference_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    reference_tone2Components = [];
    reference_tone2Components.push(polygon_7);
    reference_tone2Components.push(sound_7);
    
    reference_tone2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function reference_tone2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'reference_tone2'-------
    // get current time
    t = reference_tone2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_7* updates
    if (t >= 0.0 && polygon_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_7.tStart = t;  // (not accounting for frame time here)
      polygon_7.frameNStart = frameN;  // exact frame index
      
      polygon_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_7.setAutoDraw(false);
    }
    // start/stop sound_7
    if (t >= 0.0 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_7.stop();  // stop the sound (if longer than duration)
      }
      sound_7.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reference_tone2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reference_tone2RoutineEnd() {
  return async function () {
    //------Ending Routine 'reference_tone2'-------
    reference_tone2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_7.stop();  // ensure sound has stopped at end of routine
    sound_files = stimulus_array2[cntr2];
    
    return Scheduler.Event.NEXT;
  };
}

function comparison_tone2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'comparison_tone2'-------
    t = 0;
    comparison_tone2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_8 = new sound.Sound({
    win: psychoJS.window,
    value: sound_files,
    secs: 1.0,
    });
    sound_8.secs=1.0;
    sound_8.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "comparison_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    comparison_tone2Components = [];
    comparison_tone2Components.push(polygon_8);
    comparison_tone2Components.push(sound_8);
    
    comparison_tone2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function comparison_tone2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'comparison_tone2'-------
    // get current time
    t = comparison_tone2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_8* updates
    if (t >= 0.0 && polygon_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_8.tStart = t;  // (not accounting for frame time here)
      polygon_8.frameNStart = frameN;  // exact frame index
      
      polygon_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_8.setAutoDraw(false);
    }
    // start/stop sound_8
    if (t >= 0.0 && sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_8.tStart = t;  // (not accounting for frame time here)
      sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_8.play(); });  // screen flip
      sound_8.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_8.stop();  // stop the sound (if longer than duration)
      }
      sound_8.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comparison_tone2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function comparison_tone2RoutineEnd() {
  return async function () {
    //------Ending Routine 'comparison_tone2'-------
    comparison_tone2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_8.stop();  // ensure sound has stopped at end of routine
    answers = answer_array2[cntr2];
    find_it = 0;
    if ((answers === "equal")) {
        find_it = 1;
    }
    cntr2 += 1;
    console.log(cntr2);
    
    return Scheduler.Event.NEXT;
  };
}

function End_tone2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_tone2_2'-------
    t = 0;
    End_tone2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    sound_9.secs=1.0;
    sound_9.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Answe_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    End_tone2_2Components = [];
    End_tone2_2Components.push(polygon_9);
    End_tone2_2Components.push(key_resp_4);
    End_tone2_2Components.push(sound_9);
    
    End_tone2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_tone2_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_tone2_2'-------
    // get current time
    t = End_tone2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_9* updates
    if (t >= 0.0 && polygon_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_9.tStart = t;  // (not accounting for frame time here)
      polygon_9.frameNStart = frameN;  // exact frame index
      
      polygon_9.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_4.keys == answers) {
            key_resp_4.corr = 1;
        } else {
            key_resp_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_9
    if (t >= 0.0 && sound_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_9.tStart = t;  // (not accounting for frame time here)
      sound_9.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_9.play(); });  // screen flip
      sound_9.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_9.stop();  // stop the sound (if longer than duration)
      }
      sound_9.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_tone2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_tone2_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'End_tone2_2'-------
    End_tone2_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_4.keys === undefined) {
      if (['None','none',undefined].includes(answers)) {
         key_resp_4.corr = 1;  // correct non-response
      } else {
         key_resp_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    sound_9.stop();  // ensure sound has stopped at end of routine
    // the Routine "End_tone2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function feedback2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback2_2'-------
    t = 0;
    feedback2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_24.setVolume(1.0);
    if (key_resp.corr) {
        sound = sounds[0];
    } else {
        if ((find_it === 1)) {
            sound = sounds[0];
        } else {
            sound = sounds[1];
        }
    }
    next_wait = np.random.choice(np.arange(6, 11), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "feedback_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    feedback2_2Components = [];
    feedback2_2Components.push(polygon_24);
    feedback2_2Components.push(sound_24);
    
    feedback2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback2_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback2_2'-------
    // get current time
    t = feedback2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_24* updates
    if (t >= 0.0 && polygon_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_24.tStart = t;  // (not accounting for frame time here)
      polygon_24.frameNStart = frameN;  // exact frame index
      
      polygon_24.setAutoDraw(true);
    }

    frameRemains = 0.0 + next_wait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_24.setAutoDraw(false);
    }
    // start/stop sound_24
    if (t >= 0.0 && sound_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_24.tStart = t;  // (not accounting for frame time here)
      sound_24.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_24.play(); });  // screen flip
      sound_24.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_24.getDuration() + sound_24.tStart)     && sound_24.status === PsychoJS.Status.STARTED) {
      sound_24.stop();  // stop the sound (if longer than duration)
      sound_24.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback2_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback2_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback2_2'-------
    feedback2_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_24.stop();  // ensure sound has stopped at end of routine
    // the Routine "feedback2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Pupil_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Pupil_3'-------
    t = 0;
    Pupil_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((eyetracking === "1")) {
        time_fn = core.monotonicClock.getTime;
        name = expInfo["participant"];
        rstring = ("R " + name.toString());
        pupil_remote.send_string(rstring);
        console.log(pupil_remote.recv_string());
        label = "start_of_experiment";
        duration = 0.0;
        minimal_trigger = new_trigger(label, duration);
        send_trigger(minimal_trigger);
        sleep(0.25);
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    Pupil_3Components = [];
    
    Pupil_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Pupil_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Pupil_3'-------
    // get current time
    t = Pupil_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pupil_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Pupil_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Pupil_3'-------
    Pupil_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Pupil_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Ready_tone3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ready_tone3'-------
    t = 0;
    Ready_tone3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wait_ready = np.random.choice(np.arange(2, 7), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "Ready_Tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_10.secs=1.0;
    sound_10.setVolume(1.0);
    // keep track of which components have finished
    Ready_tone3Components = [];
    Ready_tone3Components.push(polygon_10);
    Ready_tone3Components.push(sound_10);
    
    Ready_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Ready_tone3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ready_tone3'-------
    // get current time
    t = Ready_tone3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_10* updates
    if (t >= 0.0 && polygon_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_10.tStart = t;  // (not accounting for frame time here)
      polygon_10.frameNStart = frameN;  // exact frame index
      
      polygon_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + wait_ready - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_10.setAutoDraw(false);
    }
    // start/stop sound_10
    if (t >= 0.0 && sound_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_10.tStart = t;  // (not accounting for frame time here)
      sound_10.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_10.play(); });  // screen flip
      sound_10.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_10.stop();  // stop the sound (if longer than duration)
      }
      sound_10.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ready_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ready_tone3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Ready_tone3'-------
    Ready_tone3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_10.stop();  // ensure sound has stopped at end of routine
    // the Routine "Ready_tone3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reference_tone3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'reference_tone3'-------
    t = 0;
    reference_tone3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_11.secs=1.0;
    sound_11.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Reference_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    reference_tone3Components = [];
    reference_tone3Components.push(polygon_11);
    reference_tone3Components.push(sound_11);
    
    reference_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function reference_tone3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'reference_tone3'-------
    // get current time
    t = reference_tone3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_11* updates
    if (t >= 0.0 && polygon_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_11.tStart = t;  // (not accounting for frame time here)
      polygon_11.frameNStart = frameN;  // exact frame index
      
      polygon_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_11.setAutoDraw(false);
    }
    // start/stop sound_11
    if (t >= 0.0 && sound_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_11.tStart = t;  // (not accounting for frame time here)
      sound_11.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_11.play(); });  // screen flip
      sound_11.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_11.stop();  // stop the sound (if longer than duration)
      }
      sound_11.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reference_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reference_tone3RoutineEnd() {
  return async function () {
    //------Ending Routine 'reference_tone3'-------
    reference_tone3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_11.stop();  // ensure sound has stopped at end of routine
    sound_files = stimulus_array3[cntr3];
    
    return Scheduler.Event.NEXT;
  };
}

function comparison_tone3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'comparison_tone3'-------
    t = 0;
    comparison_tone3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_12 = new sound.Sound({
    win: psychoJS.window,
    value: sound_files,
    secs: 1.0,
    });
    sound_12.secs=1.0;
    sound_12.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "comparison_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    comparison_tone3Components = [];
    comparison_tone3Components.push(polygon_12);
    comparison_tone3Components.push(sound_12);
    
    comparison_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function comparison_tone3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'comparison_tone3'-------
    // get current time
    t = comparison_tone3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_12* updates
    if (t >= 0.0 && polygon_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_12.tStart = t;  // (not accounting for frame time here)
      polygon_12.frameNStart = frameN;  // exact frame index
      
      polygon_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_12.setAutoDraw(false);
    }
    // start/stop sound_12
    if (t >= 0.0 && sound_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_12.tStart = t;  // (not accounting for frame time here)
      sound_12.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_12.play(); });  // screen flip
      sound_12.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_12.stop();  // stop the sound (if longer than duration)
      }
      sound_12.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comparison_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function comparison_tone3RoutineEnd() {
  return async function () {
    //------Ending Routine 'comparison_tone3'-------
    comparison_tone3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_12.stop();  // ensure sound has stopped at end of routine
    answers = answer_array3[cntr3];
    find_it = 0;
    if ((answers === "equal")) {
        find_it = 1;
    }
    cntr3 += 1;
    console.log(cntr3);
    
    return Scheduler.Event.NEXT;
  };
}

function End_tone3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_tone3'-------
    t = 0;
    End_tone3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    time_fn = core.monotonicClock.getTime;
    label = "Answe_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_13.secs=1.0;
    sound_13.setVolume(1.0);
    // keep track of which components have finished
    End_tone3Components = [];
    End_tone3Components.push(polygon_13);
    End_tone3Components.push(key_resp_5);
    End_tone3Components.push(sound_13);
    
    End_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_tone3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_tone3'-------
    // get current time
    t = End_tone3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_13* updates
    if (t >= 0.0 && polygon_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_13.tStart = t;  // (not accounting for frame time here)
      polygon_13.frameNStart = frameN;  // exact frame index
      
      polygon_13.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_5.keys == answers) {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_13
    if (t >= 0.0 && sound_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_13.tStart = t;  // (not accounting for frame time here)
      sound_13.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_13.play(); });  // screen flip
      sound_13.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_13.stop();  // stop the sound (if longer than duration)
      }
      sound_13.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_tone3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_tone3RoutineEnd() {
  return async function () {
    //------Ending Routine 'End_tone3'-------
    End_tone3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes(answers)) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    sound_13.stop();  // ensure sound has stopped at end of routine
    // the Routine "End_tone3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function feedback_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_3'-------
    t = 0;
    feedback_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_25.setVolume(1.0);
    if (key_resp.corr) {
        sound = sounds[0];
    } else {
        if ((find_it === 1)) {
            sound = sounds[0];
        } else {
            sound = sounds[1];
        }
    }
    next_wait = np.random.choice(np.arange(6, 11), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "feedback_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    feedback_3Components = [];
    feedback_3Components.push(polygon_25);
    feedback_3Components.push(sound_25);
    
    feedback_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_3'-------
    // get current time
    t = feedback_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_25* updates
    if (t >= 0.0 && polygon_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_25.tStart = t;  // (not accounting for frame time here)
      polygon_25.frameNStart = frameN;  // exact frame index
      
      polygon_25.setAutoDraw(true);
    }

    frameRemains = 0.0 + next_wait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_25.setAutoDraw(false);
    }
    // start/stop sound_25
    if (t >= 0.0 && sound_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_25.tStart = t;  // (not accounting for frame time here)
      sound_25.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_25.play(); });  // screen flip
      sound_25.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_25.getDuration() + sound_25.tStart)     && sound_25.status === PsychoJS.Status.STARTED) {
      sound_25.stop();  // stop the sound (if longer than duration)
      sound_25.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_3'-------
    feedback_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_25.stop();  // ensure sound has stopped at end of routine
    // the Routine "feedback_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Pupil_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Pupil_4'-------
    t = 0;
    Pupil_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((eyetracking === "1")) {
        time_fn = core.monotonicClock.getTime;
        name = expInfo["participant"];
        rstring = "R ";
        pupil_remote.send_string(rstring);
        console.log(pupil_remote.recv_string());
        label = "Begin Block2";
        duration = 0.0;
        minimal_trigger = new_trigger(label, duration);
        send_trigger(minimal_trigger);
        sleep(0.25);
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    Pupil_4Components = [];
    
    Pupil_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Pupil_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Pupil_4'-------
    // get current time
    t = Pupil_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pupil_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Pupil_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Pupil_4'-------
    Pupil_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Pupil_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Ready_Tone4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ready_Tone4'-------
    t = 0;
    Ready_Tone4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_14.secs=1.0;
    sound_14.setVolume(0.8);
    wait_ready = np.random.choice(np.arange(2, 7), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "Ready_Tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    Ready_Tone4Components = [];
    Ready_Tone4Components.push(polygon_14);
    Ready_Tone4Components.push(sound_14);
    
    Ready_Tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Ready_Tone4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ready_Tone4'-------
    // get current time
    t = Ready_Tone4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_14* updates
    if (t >= 0.0 && polygon_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_14.tStart = t;  // (not accounting for frame time here)
      polygon_14.frameNStart = frameN;  // exact frame index
      
      polygon_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + wait_ready - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_14.setAutoDraw(false);
    }
    // start/stop sound_14
    if (t >= 0.0 && sound_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_14.tStart = t;  // (not accounting for frame time here)
      sound_14.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_14.play(); });  // screen flip
      sound_14.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_14.stop();  // stop the sound (if longer than duration)
      }
      sound_14.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ready_Tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ready_Tone4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Ready_Tone4'-------
    Ready_Tone4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_14.stop();  // ensure sound has stopped at end of routine
    // the Routine "Ready_Tone4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Reference_tone4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Reference_tone4'-------
    t = 0;
    Reference_tone4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_15.secs=1.0;
    sound_15.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Reference_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    Reference_tone4Components = [];
    Reference_tone4Components.push(polygon_15);
    Reference_tone4Components.push(sound_15);
    
    Reference_tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Reference_tone4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Reference_tone4'-------
    // get current time
    t = Reference_tone4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_15* updates
    if (t >= 0.0 && polygon_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_15.tStart = t;  // (not accounting for frame time here)
      polygon_15.frameNStart = frameN;  // exact frame index
      
      polygon_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_15.setAutoDraw(false);
    }
    // start/stop sound_15
    if (t >= 0.0 && sound_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_15.tStart = t;  // (not accounting for frame time here)
      sound_15.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_15.play(); });  // screen flip
      sound_15.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_15.stop();  // stop the sound (if longer than duration)
      }
      sound_15.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Reference_tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Reference_tone4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Reference_tone4'-------
    Reference_tone4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_15.stop();  // ensure sound has stopped at end of routine
    sound_files = stimulus_array4[cntr4];
    
    return Scheduler.Event.NEXT;
  };
}

function comparison_tone4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'comparison_tone4'-------
    t = 0;
    comparison_tone4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_16 = new sound.Sound({
    win: psychoJS.window,
    value: sound_files,
    secs: 1.0,
    });
    sound_16.secs=1.0;
    sound_16.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "comparison_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    comparison_tone4Components = [];
    comparison_tone4Components.push(polygon_16);
    comparison_tone4Components.push(sound_16);
    
    comparison_tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function comparison_tone4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'comparison_tone4'-------
    // get current time
    t = comparison_tone4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_16* updates
    if (t >= 0.0 && polygon_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_16.tStart = t;  // (not accounting for frame time here)
      polygon_16.frameNStart = frameN;  // exact frame index
      
      polygon_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_16.setAutoDraw(false);
    }
    // start/stop sound_16
    if (t >= 0.0 && sound_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_16.tStart = t;  // (not accounting for frame time here)
      sound_16.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_16.play(); });  // screen flip
      sound_16.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_16.stop();  // stop the sound (if longer than duration)
      }
      sound_16.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comparison_tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function comparison_tone4RoutineEnd() {
  return async function () {
    //------Ending Routine 'comparison_tone4'-------
    comparison_tone4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_16.stop();  // ensure sound has stopped at end of routine
    answers = answer_array4[cntr4];
    cntr4 += 1;
    console.log(cntr4);
    
    return Scheduler.Event.NEXT;
  };
}

function End_tone4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_tone4'-------
    t = 0;
    End_tone4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    time_fn = core.monotonicClock.getTime;
    label = "Answe_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_17.secs=1.0;
    sound_17.setVolume(1.0);
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    End_tone4Components = [];
    End_tone4Components.push(sound_17);
    End_tone4Components.push(polygon_17);
    End_tone4Components.push(key_resp_6);
    
    End_tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_tone4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_tone4'-------
    // get current time
    t = End_tone4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_17
    if (t >= 0.0 && sound_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_17.tStart = t;  // (not accounting for frame time here)
      sound_17.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_17.play(); });  // screen flip
      sound_17.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_17.stop();  // stop the sound (if longer than duration)
      }
      sound_17.status = PsychoJS.Status.FINISHED;
    }
    
    // *polygon_17* updates
    if (t >= 0.0 && polygon_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_17.tStart = t;  // (not accounting for frame time here)
      polygon_17.frameNStart = frameN;  // exact frame index
      
      polygon_17.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 1 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_6.keys == answers) {
            key_resp_6.corr = 1;
        } else {
            key_resp_6.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_tone4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_tone4RoutineEnd() {
  return async function () {
    //------Ending Routine 'End_tone4'-------
    End_tone4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_17.stop();  // ensure sound has stopped at end of routine
    // was no response the correct answer?!
    if (key_resp_6.keys === undefined) {
      if (['None','none',undefined].includes(answers)) {
         key_resp_6.corr = 1;  // correct non-response
      } else {
         key_resp_6.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    psychoJS.experiment.addData('key_resp_6.corr', key_resp_6.corr);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "End_tone4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function feedback_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_4'-------
    t = 0;
    feedback_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_6.corr) {
        sound = sounds[0];
    } else {
        sound = sounds[1];
    }
    next_wait = np.random.choice(np.arange(6, 11), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "feedback_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_18 = new sound.Sound({
    win: psychoJS.window,
    value: sound,
    secs: 1.0,
    });
    sound_18.secs=1.0;
    sound_18.setVolume(1.0);
    // keep track of which components have finished
    feedback_4Components = [];
    feedback_4Components.push(polygon_18);
    feedback_4Components.push(sound_18);
    
    feedback_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_4'-------
    // get current time
    t = feedback_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_18* updates
    if (t >= 0.0 && polygon_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_18.tStart = t;  // (not accounting for frame time here)
      polygon_18.frameNStart = frameN;  // exact frame index
      
      polygon_18.setAutoDraw(true);
    }

    frameRemains = 0.0 + next_wait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_18.setAutoDraw(false);
    }
    // start/stop sound_18
    if (t >= 0.0 && sound_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_18.tStart = t;  // (not accounting for frame time here)
      sound_18.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_18.play(); });  // screen flip
      sound_18.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_18.stop();  // stop the sound (if longer than duration)
      }
      sound_18.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_4'-------
    feedback_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_18.stop();  // ensure sound has stopped at end of routine
    // the Routine "feedback_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Pupil_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Pupil_5'-------
    t = 0;
    Pupil_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((eyetracking === "1")) {
        time_fn = core.monotonicClock.getTime;
        name = expInfo["participant"];
        rstring = "R ";
        pupil_remote.send_string(rstring);
        console.log(pupil_remote.recv_string());
        label = "Begin Block2";
        duration = 0.0;
        minimal_trigger = new_trigger(label, duration);
        send_trigger(minimal_trigger);
        sleep(0.25);
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    Pupil_5Components = [];
    
    Pupil_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Pupil_5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Pupil_5'-------
    // get current time
    t = Pupil_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Pupil_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Pupil_5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Pupil_5'-------
    Pupil_5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Pupil_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Ready_tone5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Ready_tone5'-------
    t = 0;
    Ready_tone5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_19.secs=1.0;
    sound_19.setVolume(1.0);
    wait_ready = np.random.choice(np.arange(2, 7), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "Ready_Tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    Ready_tone5Components = [];
    Ready_tone5Components.push(polygon_19);
    Ready_tone5Components.push(sound_19);
    
    Ready_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Ready_tone5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Ready_tone5'-------
    // get current time
    t = Ready_tone5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_19* updates
    if (t >= 0.0 && polygon_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_19.tStart = t;  // (not accounting for frame time here)
      polygon_19.frameNStart = frameN;  // exact frame index
      
      polygon_19.setAutoDraw(true);
    }

    frameRemains = 0.0 + wait_ready - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_19.setAutoDraw(false);
    }
    // start/stop sound_19
    if (t >= 0.0 && sound_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_19.tStart = t;  // (not accounting for frame time here)
      sound_19.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_19.play(); });  // screen flip
      sound_19.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_19.stop();  // stop the sound (if longer than duration)
      }
      sound_19.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ready_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ready_tone5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Ready_tone5'-------
    Ready_tone5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_19.stop();  // ensure sound has stopped at end of routine
    // the Routine "Ready_tone5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function reference_tone5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'reference_tone5'-------
    t = 0;
    reference_tone5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_20.secs=1.0;
    sound_20.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "Reference_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    reference_tone5Components = [];
    reference_tone5Components.push(polygon_20);
    reference_tone5Components.push(sound_20);
    
    reference_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function reference_tone5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'reference_tone5'-------
    // get current time
    t = reference_tone5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_20* updates
    if (t >= 0.0 && polygon_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_20.tStart = t;  // (not accounting for frame time here)
      polygon_20.frameNStart = frameN;  // exact frame index
      
      polygon_20.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_20.setAutoDraw(false);
    }
    // start/stop sound_20
    if (t >= 0.0 && sound_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_20.tStart = t;  // (not accounting for frame time here)
      sound_20.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_20.play(); });  // screen flip
      sound_20.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_20.stop();  // stop the sound (if longer than duration)
      }
      sound_20.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reference_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reference_tone5RoutineEnd() {
  return async function () {
    //------Ending Routine 'reference_tone5'-------
    reference_tone5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_20.stop();  // ensure sound has stopped at end of routine
    sound_files = stimulus_array5[cntr5];
    
    return Scheduler.Event.NEXT;
  };
}

function comparison_tone5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'comparison_tone5'-------
    t = 0;
    comparison_tone5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    sound_21 = new sound.Sound({
    win: psychoJS.window,
    value: sound_files,
    secs: 1.0,
    });
    sound_21.secs=1.0;
    sound_21.setVolume(1.0);
    time_fn = core.monotonicClock.getTime;
    label = "comparison_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    // keep track of which components have finished
    comparison_tone5Components = [];
    comparison_tone5Components.push(polygon_21);
    comparison_tone5Components.push(sound_21);
    
    comparison_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function comparison_tone5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'comparison_tone5'-------
    // get current time
    t = comparison_tone5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_21* updates
    if (t >= 0.0 && polygon_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_21.tStart = t;  // (not accounting for frame time here)
      polygon_21.frameNStart = frameN;  // exact frame index
      
      polygon_21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_21.setAutoDraw(false);
    }
    // start/stop sound_21
    if (t >= 0.0 && sound_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_21.tStart = t;  // (not accounting for frame time here)
      sound_21.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_21.play(); });  // screen flip
      sound_21.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_21.stop();  // stop the sound (if longer than duration)
      }
      sound_21.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comparison_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function comparison_tone5RoutineEnd() {
  return async function () {
    //------Ending Routine 'comparison_tone5'-------
    comparison_tone5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_21.stop();  // ensure sound has stopped at end of routine
    answers = answer_array5[cntr5];
    cntr5 += 1;
    console.log(cntr5);
    
    return Scheduler.Event.NEXT;
  };
}

function End_tone5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_tone5'-------
    t = 0;
    End_tone5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    time_fn = core.monotonicClock.getTime;
    label = "Answe_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_22.secs=1.0;
    sound_22.setVolume(1.0);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    End_tone5Components = [];
    End_tone5Components.push(polygon_22);
    End_tone5Components.push(sound_22);
    End_tone5Components.push(key_resp_7);
    
    End_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_tone5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_tone5'-------
    // get current time
    t = End_tone5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_22* updates
    if (t >= 0.0 && polygon_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_22.tStart = t;  // (not accounting for frame time here)
      polygon_22.frameNStart = frameN;  // exact frame index
      
      polygon_22.setAutoDraw(true);
    }

    // start/stop sound_22
    if (t >= 0.0 && sound_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_22.tStart = t;  // (not accounting for frame time here)
      sound_22.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_22.play(); });  // screen flip
      sound_22.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.0 > 0.5) {
        sound_22.stop();  // stop the sound (if longer than duration)
      }
      sound_22.status = PsychoJS.Status.FINISHED;
    }
    
    // *key_resp_7* updates
    if (t >= 1 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['lshift', 'rshift'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_7.keys == answers) {
            key_resp_7.corr = 1;
        } else {
            key_resp_7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_tone5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_tone5RoutineEnd() {
  return async function () {
    //------Ending Routine 'End_tone5'-------
    End_tone5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_22.stop();  // ensure sound has stopped at end of routine
    // was no response the correct answer?!
    if (key_resp_7.keys === undefined) {
      if (['None','none',undefined].includes(answers)) {
         key_resp_7.corr = 1;  // correct non-response
      } else {
         key_resp_7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    psychoJS.experiment.addData('key_resp_7.corr', key_resp_7.corr);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "End_tone5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function feedback5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback5'-------
    t = 0;
    feedback5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_7.corr) {
        sound = sounds[0];
    } else {
        sound = sounds[1];
    }
    next_wait = np.random.choice(np.arange(6, 11), 1)[0];
    time_fn = core.monotonicClock.getTime;
    label = "feedback_tone";
    duration = 0.0;
    minimal_trigger = new_trigger(label, duration);
    send_trigger(minimal_trigger);
    sleep(1.0);
    
    sound_23.setVolume(1.0);
    // keep track of which components have finished
    feedback5Components = [];
    feedback5Components.push(polygon_23);
    feedback5Components.push(sound_23);
    
    feedback5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback5'-------
    // get current time
    t = feedback5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_23* updates
    if (t >= 0.0 && polygon_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_23.tStart = t;  // (not accounting for frame time here)
      polygon_23.frameNStart = frameN;  // exact frame index
      
      polygon_23.setAutoDraw(true);
    }

    frameRemains = 0.0 + next_wait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_23.setAutoDraw(false);
    }
    // start/stop sound_23
    if (t >= 0.0 && sound_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_23.tStart = t;  // (not accounting for frame time here)
      sound_23.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_23.play(); });  // screen flip
      sound_23.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_23.getDuration() + sound_23.tStart)     && sound_23.status === PsychoJS.Status.STARTED) {
      sound_23.stop();  // stop the sound (if longer than duration)
      sound_23.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback5RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback5'-------
    feedback5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_23.stop();  // ensure sound has stopped at end of routine
    // the Routine "feedback5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function End_ExperimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_Experiment'-------
    t = 0;
    End_ExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    End_ExperimentComponents = [];
    End_ExperimentComponents.push(text_3);
    
    End_ExperimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function End_ExperimentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_Experiment'-------
    // get current time
    t = End_ExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_ExperimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function End_ExperimentRoutineEnd() {
  return async function () {
    //------Ending Routine 'End_Experiment'-------
    End_ExperimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

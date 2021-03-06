# pupil-pitch
This repository holds code and resources for a replication study conducted to use pupillometry as an implicit measure of auditory processing load. The task presented is a simple pitch discrimination task. Participants had to judge a comparison tone against a standard tone and indicate whether the comparison was higher or lower than the standard. The standard tone was always 850Hz while the comparison tone varied between 820 and 880Hz in increments of 6Hz. Participants heard all possible comparison tones (11 of them) in a single block, and this block was randomized and repeated 3 times for a total of 33 trials.

![Flow Diagram](https://raw.githubusercontent.com/Computational-Cognitive-Musicology-Lab/pupil-pitch/main/images/TrialDiagram.png)
 
 ### Requirements
 To run this experiment kindly ensure:
-   You have Python 3.7+ and ensure all the dependencies in `requirements.txt` are satisfied 
 ```python
 cd pupil-pitch
pip install -r requirements.txt
```
-  You have downloaded and compiled the Standalone GUI for PsychoPy from:
https://www.psychopy.org/download.html
-  Download the Pupil Core softwares (Pupil Player and Pupil Capture) and follow basic setup:
https://docs.pupil-labs.com/core/

### Pupil Labs integration
Python scripts with examples to integrate Psychopy functionality and pupil-labs software can be found in the `Pupil-labs` folder of this repository.

### Things to keep in mind
- Ensure the pupil capture software is open and running before running an experiment
- Run the world view lens calibration before the experiment begins for a participant 
- Be sure to Check the `Resources folder` for relevant literature and resources to learn more about any of this.

***
This work is developed and maintained by Noel Alben, GRA CCML Lab under the guidance of Dr. Claire Arthur.

If you have any clarifications/suggestions kindly reach out to me: noelalben@gatech.edu

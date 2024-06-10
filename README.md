
# Aimify

An archery scoring app designed to end the use of paper scoresheets by offering a more efficient alternative through the use of ML models.

To find out more, please visit [aimify.fletchworks.dev](https://aimify.fletchworks.dev)

### Update: 10/06/2024

Hi, I realised after speaking with a couple of people that I might have unintentionally been a touch unclear as to the progress on Aimify. As of now, I have a working ML model, and will be working to refine the output over the next few weeks. I will start working on the React Native UI after 18/06/2024 as I have exams and other issues until that date. I genuinley apologize if this was not clearer before, but this is an ongoing project.

## Features

- Sleek and modern UI made to Material V3 guidelines

- Automatic scoring via the use of instance segmentation models

- Cross platform compatability through the use of React Native

- User interaction and sharing

- View all of your earned badges


## Machine Learning

![image](https://github.com/ScapularSteam/aimify/blob/main/misc/Frame%203.png?raw=true)

*Figure 1: Images being labeled in CVAT, a free and open source dataset labeling tool.*

Machine Learning will be used throughout Aimify to facilitate a key feature: automatic scoring. 

Through a YoloV8 model trained on a dataset consisting of over 200 images of archery targets (currently in production), users will be able to calculate their scores by simply holding their phone up to the target, and pressing a single button.

The trained YoloV8 model will then be exported in the Tensorflow lite (.tflite) format, enabling on-device inferencing for an offline experience.

### Current Progress

![image](https://github.com/ScapularSteam/aimify/blob/main/misc/inferencing-v1.png?raw=true)

*Figure 2: Current progress on arrowV1 model*

The above image shows the first iteration of arrowV1. This version uses Roboflow's 3.0 instance segmentation model and is a work in progress. Using this model comes with some drawbacks, notably no easy way to download the model, and less than satisfactory result, causing approximatly 50% of the outer rings to not be masked. This can be fixed through using YoloV8 models and increasing the number of images in the dataset respectivly.

## User Interface (In the backlog)

![image](https://github.com/ScapularSteam/aimify/blob/main/misc/Frame%202.png?raw=true)

*Figure 3: UI mockups created in Figma with the use of Material V3 components from Google.*

The majority of archery scoring apps available today use dated UI designs, either from Material V2, or earlier. To combat this, Aimify will use Material V3 (Material you) theming and components

Aimify will be built using the React Native framework via the Expo implementation, allowing for a single codebase to be deployed to both Android and IOS. In addtion, Aimify will use React Native Paper, giving acsess to hundreds of Material V3 components to build the UI from.
## Roadmap

- Finish annotation of dataset **(Completed 31/05/2024)**

- Train ML model by end of June 2024 **(Ongoing)**

- Start UI by July 2024

- Work on backend and server-side software by August 2024

- Release alpha build by September 2024
  
## Marketing

### Below images are for reference only and not representitive of final project
Aimify will initally be marketed through word of mouth and posters

![image](https://github.com/ScapularSteam/aimify/blob/main/misc/Frame%201.png?raw=true)

*Figure 4: Potential marketing making use of Figma mockups.*

Posters such as the one above would cater specifically to archers by being placed at high footfall areas within clubs. This would be needed in order to gain a large enough user base for alpha testing in september prior to a wider roll out.
## License

[Aimify License](https://github.com/ScapularSteam/aimify/blob/main/license.txt)

Though this may be subject to change in the future, the current Aimify license is based on the GPLv3 license, with an added restriction preventing the software from being monitized.

A PDF formatted version of this license can be found [here](https://github.com/ScapularSteam/aimify/blob/main/license.pdf).

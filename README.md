### Project for NASA International Space Apps Challenge

**<ins>Challenge:<ins>** Creative Data Display with the Parker Solar Probe

**<ins>Link:<ins>** https://2022.spaceappschallenge.org/challenges/2022-challenges/creative-data-display/details

-----
![Dance of Irradiance Banner](https://user-images.githubusercontent.com/26402139/193454052-d717c023-575e-48e2-9e11-3fb1df3b892e.png)

**<ins>Project Summary:<ins>**
Dance of Irradiance is an HTML5 game designed to creatively display solar irradiance and magnetic field data from the {...Parker Solar Probe...}. It uses the Phaser open source framework to make a Canvas and WebGL powered game that will run in a browser. 

In this game you will be helping our astronaut friend on a perilous mission near the surface of the sun! Your objective is to clean up as much space debris orbiting the sun as possible. Collecting space debris in the danger zone will award 30 points per piece of debris, while collecting space debris elsewhere will award 10 points per piece of debris.

However:
- You must avoid the routine solar flares (INFLUENCED BY SOLAR DATA) while attempting to collect the space debris 
- If you get too close to the sun you will enter the danger zone and lose health points
- You must avoid the coronal mass ejections (INFLUENCED BY SOLAR DATA) by hiding in the safe area

**<ins>Controls:<ins>**
- Direction keys = navigate your astronaut up, down, left, and right
- Spacebar = boost for extra movement speed

**<ins>In-Game Objects<ins>**

| **Item** | **Image** | **Description** |
|----------|------------|-----------------|
| **Astronaut Friend**| ![Astronaut Icon](https://user-images.githubusercontent.com/26402139/193454696-68565e68-4c43-4026-86a0-0f2c42ac16ab.png) | Who is hiding behind that helmet? Is it me? Is it you? Is it AI? I guess we will never know... |
| **Solar Flare** | ![Fire Icon](https://user-images.githubusercontent.com/26402139/193454693-f83f8678-577b-4532-a0c0-fab707ad0913.png) | The sun can get a little too hot for our astronaut friend at times. Avoid these at all costs. |              	|
| **Space Debris** | ![Trash Icon](https://user-images.githubusercontent.com/26402139/193454697-3e81aba8-a8f7-40dd-9feb-6772b9aa641d.png) | Unfortunately space debris has been found orbiting the sun. Your mission, should you choose to accept, is to collect as much space debris as you can. |
| **Health Booster** | ![Heart Icon](https://raw.githubusercontent.com/ericlaycock/NASAhackathon/main/assets/heart.png) | NASA appreciates the astronaut's efforts to clean up space debris and is launching health boosters into space for them! |
| **Space Station** | ![Space Station Icon](https://github.com/ericlaycock/NASAhackathon/blob/main/assets/safe_zone.png) | {add something} |

**<ins>Mechanics:<ins>**
- **Astronaut Movement:** The astronaut can move in any of the 4 keyboard directions (up, down, left, right). Each movement direction has a unqiue corresponding animation utilizing the astronaut's jetpack. Boosting the jetpack with spacebar makes your astronaut move even faster.
- **Danger Zone:** The danger zone represents the area where the astronatut's heat shielding is overwhelmed by the sun and your health points (HP) start depleting. The danger zone occupies roughly the top 1/3 of the scene. The incentive for staying close to the sun and suffering the HP loss is the increased point value obtained from collecting space debris.
- **Astronaut Health:** The astronaut starts with 100 HP. The astronaut will lose HP if they spend time too close to the sun (in the danger zone). The only way to restore HP is through Health Boosters.
- **Health Boosters:** Health boosters restore 10 HP when the astronaut collects them. They are randomly spawned.
- **Astronaut Death:** The astronaut can die in one of 3 ways: (1) running out of HP, (2) colliding with a solar flare, and (3) being caught by a coronal mass ejection. Death results in game over.
- **Space Debris:** Space debris is generated 1 at a time at a random x-coordinate at the top of the screen. The space debris then falls towards the bottom of the screen. If you catch the debris within the danger zone, you get 30 points. If you catch the debris in the anywhere else, you get 10 points. Once you catch a piece of space debris, the position of the space debris resets at a random x-coordinate at the top of the screen. If you don't catch the space debris, it hurtles into the void of space! Don't worry though, a the space debris reset for you to try and capture again. There is no penalty for not catching a piece of space debris...aside from your guilty conscience for letting space continue to be polluted.
- **Solar Flares:** Solar flares are one of the data display mechanisms used in the game. Solar flares represent irradiance, the power per unit area (mW/m^2) received from the sun in the form of electromagnetic radition. In Dance of Irradiance, irradiance data was obtained from {...} and scaled to a number between 1 and 8. Solar flares are generated every 2 seconds, and the current scaled irradiance value determines the number of solar flares that appear on the screen at once. The more solar flares on the screen at once, the harder it is for the astronaut to dodge all of them. Hence, the perilousness of the astonaut's mission varies in real time with solar irradiance data. Getting hit by a solar flare will result in instant death for our poor astronaut.
- **Coronal Mass Ejection:** Coronal mass ejections are the other data display mechanism used in the game. Coronal mass ejections represent magnetic field strength (measured in gauss), which controls the movement of heated plasma at the surface of the sun. In Dance of Irradiance, magnetic field strength data is obtained from {...} and {scaled to a number between 1 and 8}. A coronal mass ejection is generated whenever the scaled magnetic field strength value exceeds {5}. Coronal mass ejections are so large that the astronaut cannot possibly dodge between the ejection particles. Getting caught in the coronal mass ejection will result in instant death for our poor astronaut.
- **Safe Area:** The only way for the astronaut to survive a coronal mass ejection is to hide in the shelter of their space station. The space station is represented by a safe area which appears at a random location at a safe distance from the sun when a coronal mass ejection occurs.

**<ins>Data Sources:<ins>**
- {Data source for solar flares}
- {Data source for coronal mass ejections}

**<ins>Image Sources:<ins>**
- Banner photo created with image from <a href="https://unsplash.com/@nasa=">NASA</a> on <a href="https://unsplash.com/s/photos/solar-flare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> and font by <a href="https://fontesk.com/space-fray-font/">Margarita Fray</a>
- Health Booster created with image from <a target="_blank" href="https://icons8.com/icon/64452/heart">Heart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
{add astronaunt}
{add space station}

**<ins>Future Project Upgrades:<ins>**
- Add live data input rather than stored (previous) solar data
- Add varrying difficulty over time (e.g., increasing difficulty levels)
- Add audio
- Add a restart game option at the game-over screen

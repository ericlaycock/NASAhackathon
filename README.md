### Project for NASA International Space Apps Challenge

**<ins>Challenge:<ins>** Creative Data Display with the Parker Solar Probe

**<ins>Link:<ins>** https://2022.spaceappschallenge.org/challenges/2022-challenges/creative-data-display/details

-----
![Dance of Irradiance Banner](https://user-images.githubusercontent.com/26402139/193454052-d717c023-575e-48e2-9e11-3fb1df3b892e.png)

**<ins>Project Summary:<ins>**
Dance of Irradiance is an HTML5 game designed to creatively display data from the {...Parker Solar Probe...}. It uses the Phaser open source framework to make a Canvas and WebGL powered game that will run in a browser. 

In this game you will be helping our astronaut friend on a perilous mission near the surface of the sun! Your objective is to clean up as much space debris orbiting the sun as possible. Collecting space debris in the danger zone will award 30 points per piece of debris, while collecting space debris elsewhere will award 10 points per piece of debris.

However:
- You must avoid the routine solar flares (INFLUENCED BY SOLAR DATA) while attempting to collect the space debris 
- If you get too close to the sun you will enter the danger zone and lose health points (HP)
- You must avoid the random coronal mass ejections (INFLUENCED BY SOLAR DATA) by hiding in your safe zone

**<ins>Controls:<ins>**
- Direction keys = navigate your astronaut up, down, left, and right
- Spacebar = boost for extra movement speed

**<ins>In-Game Objects<ins>**

| **Item** | **Image** | **Description** |
|----------|------------|-----------------|
| **Astronaut Friend**| ![Astronaut Icon](https://user-images.githubusercontent.com/26402139/193454696-68565e68-4c43-4026-86a0-0f2c42ac16ab.png) | Who is hiding behind that helmet? Is it me? Is it you? Is it AI? I guess we will never know... |
| **Solar Flare** | ![Fire Icon](https://user-images.githubusercontent.com/26402139/193454693-f83f8678-577b-4532-a0c0-fab707ad0913.png) | The sun can get a little too hot for our astronaut friend at times. Avoid these at all costs. |              	|
| **Space Debris** | ![Trash Icon](https://user-images.githubusercontent.com/26402139/193454697-3e81aba8-a8f7-40dd-9feb-6772b9aa641d.png) | Unfortunately space debris has been found orbiting the sun. Your mission, should you choose to accept, is to collect as much space debris as you can|
| **Health Booster** | ![Heart Icon](https://raw.githubusercontent.com/ericlaycock/NASAhackathon/main/assets/heart.png) | NASA appreciates the astronaut's efforts to clean up space debris and is launching health boosters into space for them! |

**<ins>Mechanics:<ins>**
- **Astronaut Movement:** The astronaut can move in any of the 4 keyboard directions (up, down, left, right). Each movement direction has a unqiue corresponding animation utilizing the astronaut's jetpack. Boosting the jetpack with spacebar makes your astronaut move even faster.
- **Danger Zone:** The danger zone represents the area where the astronatut's heat shielding is overwhelmed by the sun and your health points start depleting.  
- **Astronaut Health:** The astronaut will lose health points (HP) if they spend prolonged periods of time too close to the sun (in the upper (...1/3...) of the screen). The incentive for staying close to the sun is the increased point value obtained from collecting space debris.
- **Astronaut Death:** The astronaut can die in one of 3 ways: (1) running out of HP from standing too close to the sun
- **Space Debris:** Space debris is generated 1 at a time at a random x-coordinate at the top of the screen. The space debris then falls towards the bottom of the screen. If you catch the debris in the upper (...1/3...) of the screen, you get 30 points. If you catch the debris in the lower (...2/3...) of the screen, you get 10 points. Once you catch a piece of space debris, a new piece of space debris spawns at a random x-coordinate at the top of the screen. If you don't catch the space debris, it hurtles into the void of space! Don't worry though, a new piece of space debris will spawn for you to try and capture again. There is no penalty for not catching a piece of space debris (aside from your guilty consience for letting space continue to be polluted).
- **Solar Flares:** Irradiance is the power per unit area recieved from the sun in the form of electromagnetic radition. In Dance of Irradiance, irradiance is data is obtained from {...} and scaled to a number between 1 and 8. The current irradiance determines the number of solar that appear on the screen at once. Solar flares generate every 2 seconds. Hence, the perilousness of the astonaut's mission varies in real time with solar irradiance data. Getting hit by a solar flare will result in instant death for our poor astronaut.
- **Coronal Mass Ejection:** The coronal mass ejection is tirggered by the {...data source...} value exceeding {...#...}. Getting caught in the coronal mass ejection will result in instant death for our poor astronaut.
Even more dangerous are the coronal mass ejections. These are large explusions of plasma and magnetic field from the sun's corona. When a coronal mass ejection occurs, the entire screen is filled with solar flare particles. 

is so large that the austronaut cannot possibly dodge between it's particles. Instead, they must stop collecting trash and hide in the shelter of their rocket ship (represented by the safe zone that appears at a random location near the bottom of the screen).

MOVING THE ASTRONAUT WITHIN THE SAFE AREA IS THE ONLY WAY TO SURVIVE THE CORONAL MASS EJECTION.

**<ins>Data Sources:<ins>**
- {...Parker Solar Probe...}
- {...Parker Solar Probe...}

**<ins>Image Sources:<ins>**
- Banner photo created with image from <a href="https://unsplash.com/@nasa=">NASA</a> on <a href="https://unsplash.com/s/photos/solar-flare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> and font by <a href="https://fontesk.com/space-fray-font/">Margarita Fray</a>
  
**<ins>Future Project Upgrades:<ins>**
- Add live data input rather than stored (previous) solar data
- Add a risk/reward mecahnism to encourage players to stay closer to the sun (e.g., give more points for collecting space debris near the sun) to balance the HP loss
- Add varrying difficulty over time (e.g., increasing difficulty levels)
- Add audio
- Add a restart game option at the game-over screen

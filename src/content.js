/**
 * content.js — ALL the portfolio text lives here. Edit this file and nothing else
 * to change what the boxes say.
 *
 * The order of SECTIONS is the left-to-right order of the boxes.
 *
 * Text is painted onto the front face of each cube (see Boxes.jsx). The painter
 * shrinks the font automatically so everything fits, down to a minimum size.
 * As a rule of thumb the face comfortably holds ~12 short lines of text; much
 * more than that becomes too small to read, so keep entries brief.
 *
 *   id      – short lowercase key (used for keyboard shortcuts and state)
 *   title   – big heading printed across the top of the box
 *   items   – a list of entries, each with:
 *       heading – bold first line
 *       meta    – dim second line (dates, tech stack, place…)
 *       body    – one or two sentences
 */
export const SECTIONS = [
  {
    id: 'education',
    title: 'Education & Skills',
    items: [
      { heading: 'M.S. Robotics', meta: 'University Name, 2022–2024', body: 'Thesis on real-time inverse kinematics for redundant manipulators.' },
      { heading: 'Skills', meta: 'Core stack', body: 'ROS 2, C++, Python, MoveIt, Three.js, SolidWorks, embedded control.' },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    items: [
      { heading: 'Robotics Engineer, Company A', meta: '2024–present', body: 'Built motion-planning services for a 6-DOF pick-and-place cell.' },
      { heading: 'Controls Intern, Company B', meta: '2023', body: 'Tuned joint controllers and cut settling time by 30%.' },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    items: [
      { heading: 'Autonomous Sorting Arm', meta: 'ROS 2, OpenCV', body: 'Vision-guided arm that sorts parts at 40 picks per minute.' },
      { heading: 'Rover Navigation Stack', meta: 'C++, Nav2', body: 'SLAM and path planning for an outdoor rover.' },
    ],
  },
  {
    id: 'achievements',
    title: 'Achievements',
    items: [
      { heading: 'National Robotics Challenge, 1st place', meta: '2023', body: 'Led a team of five.' },
      { heading: 'Published paper', meta: '2024', body: 'Conference paper on lightweight IK solvers.' },
    ],
  },
];

export const getSection = (id) => SECTIONS.find((s) => s.id === id) ?? null;

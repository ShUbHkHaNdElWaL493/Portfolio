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
      { heading: 'B. Tech. CSE', meta: 'IIITDM Kancheepuram, 2022–2026', body: 'CGPA: 8.26' },
      { heading: 'Robotics Skillset', body: 'Gazebo, MoveIt2, OpenCV, ROS2, Unity, URSim' },
      { heading: 'Development Tools', body: 'C++, CUDA C++, Git, Python, URScript, Xacro' },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    items: [
      { heading: 'Robotics Software Engineer, Impaqt Robotics', meta: 'July 2025 - December 2025', body: 'Built a palletizing software with custom pallet configurations and OMPL planners.' },
      { heading: 'Electronics Lead, Mars Rover Students', meta: 'June 2023 - April 2025', body: 'Directed a team of 20+ engineers to design, test, and deploy embedded control systems for rovers.' },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    items: [
      { heading: 'ARviz', meta: 'ROS2, Unity', body: 'Use augmented reality to visualize robots.' },
      { heading: 'Dual-arm Visual Servoing', meta: 'MoveIt2, OpenCV', body: 'Real-time pose generation using ArUco markers and eye-in-hand pose tracking.' },
      { heading: 'Spline Planner', meta: 'C++, Fortran', body: 'Planner for interpolating path points using Catmull-Rom splines and B-splines.' },
    ],
  },
  {
    id: 'achievements',
    title: 'Achievements',
    items: [
      { heading: 'ISRO Robotics Challenge, 2024', meta: '6th place nationally', body: 'Showcased the rover at Bharat Mandapam, New Delhi in the presence of the President of India.' },
      { heading: 'International Robotics Challenge, 2025', meta: '16th place globally', body: 'Led the electronics and software integration efforts.' },
    ],
  },
];

export const getSection = (id) => SECTIONS.find((s) => s.id === id) ?? null;

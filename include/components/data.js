// data.js — Portfolio phase content
// Each phase maps to one robot assembly step

export const phases = [
  {
    id: 'intro',
    phase: '01',
    tag: 'SUMMARY',
    title: 'Shubh Khandelwal',
    content: `Robotics Software Engineer deploying ROS2-based autonomous systems for AGVs, UGVs, and industrial manipulators.`,
    content2: `Combines C++ object-oriented design with mathematical modeling to translate algorithmic simulations into high-precision
               hardware execution, delivering scalable, production-ready solutions for advanced robotics initiatives.`,
    state: 'MPU Initialization',
  },
  {
    id: 'education',
    phase: '02',
    tag: 'EDUCATION & SKILLS',
    title: 'Educational Qualifications',
    timeline: [
      { title: 'B.Tech. CSE — IIITDM Kancheepuram, Chennai — CGPA: 8.26', date: 'November 2022 – June 2026' },
    ],
    content: `Academic milestones and technical certifications.`,
    content2: `My technical arsenal for algorithmic development, system integration, and testing.`,
    skills: [
      { title: 'ROS2, ROS, microROS, Rosserial, RTDE', date: 'Robotics Frameworks'},
      { title: 'Gazebo, Gazebo Sim, URSim', date: 'Simulation Modules'},
      { title: 'Arduino, ESP32 and STM32 boards', date: 'Embedded Systems'},
      { title: 'Pytorch, Tensorflow, Gymnasium, OpenCV', date: 'Machine Learning Modules'},
      { title: 'C++, CUDA C++, Python', date: 'Languages'},
      { title: 'Git, Github, CI/CD, Docker, CMake, Bash, Prompt Engineering', date: 'Development Tools'},
    ],
    state: 'PCB Connection',
  },
  {
    id: 'experience',
    phase: '03',
    tag: 'EXPERIENCE',
    title: 'Work Experience',
    content: `A track record of integrating systems and pushing features forward within engineering teams.`,
    entries: [
      {
        label: "Impaqt Robotics",
        role: "Robotics Software Intern",
        date: "JULY 2025 – DECEMBER 2025",
        link: "https://www.linkedin.com/company/impaqt-robotics",
        bullets: [
          "Integrated hardware interfaces with UR5, UR5e, UR10 and UR20 increasing efficiency by 20%.",
          "Architected MoveIt2 motion planning pipelines and optimized OMPL trajectories for industrial manipulation tasks.",
          "Implemented spline-based (B-spline, Catmull-Rom spline) trajectory generation for C2 continuous trajectories.",
          "Developed task-level manipulation workflows (pick-place, palletizing) using MoveIt2 Task Constructor.",
          "Validated pipelines using URSim and on real hardware; debugged controllers, planning and execution issues.",
          "Designed and deployed dynamic HMIs for exporting pallet configurations, and performing palletization.",
        ],
      },
      {
        label: "Mars Rover Students",
        role: "Electronics Lead",
        date: "APRIL 2024 – MARCH 2025",
        link: "https://www.linkedin.com/company/mars-rover-students-club-iiitdm-kancheepuram",
        bullets: [
          "Directed a cross-functional team of 20+ engineers to design, test, and deploy embedded control systems for rovers, enhancing operational reliability under competition constraints.",
          "Programmed and optimized ROS nodes and firmware using C++ and Arduino, improving real-time rover response time and reducing positional drift by over 50%.",
          "Spearheaded modular architecture redesign, decreasing system downtime by 60% during field tests through efficient error handling and hardware abstraction.",
          "Enabled high-precision actuation by integrating encoder feedback and tuning PID to achieve 5cm localization error.",
        ],
      },
    ],
    state: 'Chassis Placement',
  },
  {
    id: 'projects',
    phase: '04',
    tag: 'PROJECTS',
    title: 'Developed Projects',
    content: `Bridging the gap between robust back-end object-oriented code and seamless front-end control.`,
    entries: [
      {
        label: "Spline-based Trajectory Generator",
        link: "https://github.com/ShUbHkHaNdElWaL493/Spline-Planner",
        bullets: [
          "Architected a C++ path planning library using Catmull-Rom splines and B-splines for high-performance execution.",
          "Integrated FORTRAN-based FITPACK libraries for faster and accurate spline fitting using CMake.",
          "Tested the trajectory generation using UR manipulators, providing a smoothing tolerance of 5 mm.",
        ],
      },
      {
        label: "Autonomous Manipulator Control using RL",
        link: "https://github.com/ShUbHkHaNdElWaL493/Manipulator-Control-Using-Reinforcement-Learning",
        bullets: [
          "Designed and simulated a 4-DoF robotic arm using Xacro, ROS2 Jazzy, Rviz and Gazebo Sim for real-time applications.",
          "Developed reinforcement learning training environments using Gymnasium integrated with rclpy nodes.",
          "Tested PPO, TRPO and DQN models, localizing the gripper to 1cm error and reducing simulation latency to less than 1s.",
        ],
      },
      {
        label: "4-Wheel-4-Steering-Rover Control",
        link: "https://github.com/ShUbHkHaNdElWaL493/4-Wheel-4-Steering-Rover-Control",
        bullets: [
          "Engineered multi-mode control algorithms for Ackermann, Spot and Crab for mobile robotic platform.",
          "Applied PID tuning to the drive system for reducing vibrations by 50% and enhancing motion control.",
          "Integrated Neo-6M GPS and encoder feedback with the rover system for precise localization.",
        ],
      },
      {
        label: "Warehouse Automation",
        link: "https://github.com/ShUbHkHaNdElWaL493/Warehouse-Automation",
        bullets: [
          "Implemented rigid path algorithms in a Differential Drive bot for warehouse automation to remove uncertainty.",
          "Verified control over multiple environments using IR sensors and LiDAR SLAM for accurate localization.",
          "Created an end-user interface using Flask, microROS and rclpy for system-level functionality control.",
        ],
      },
    ],
    state: 'Sensor Addition',
  },
  {
    id: 'achievements',
    phase: '05',
    tag: 'ACHIEVEMENTS',
    title: 'Performance Benchmarks',
    content: `Highlights from my professional journey through robotics.`,
    metrics: [
      { value: 'IRC 2025: 16th globally', label: 'International Rover Challenge 2025: Led the software-electronics integration efforts, and increased the team standing to 16th globally' },
      { value: 'IRoC-U 2024: 6th nationwide', label: 'ISRO Robotics Challenge URSC (IRoC-U) 2024: Showcased the rover at Bharat Mandapam, New Delhi in the presence of the President of India' },
      { value: 'IRC 2024: 21st worldwide', label: 'International Rover Challenge 2024: Qualified among top 52 teams worldwide and secured 21st rank globally' },
    ],
    state: 'Suspension Attachment',
  },
  {
    id: 'contact',
    phase: '06',
    tag: 'CONTACT',
    title: 'Contact Information',
    content: `Looking forward to meeting new people and getting new experiences.`,
    links: [
      { icon: '📞', label: 'Call me here.', type: 'phone', href: 'tel:+919416060103' },
      { icon: '📧', label: 'Send me an e-mail.', type: 'email', href: 'mailto:shubh4664@gmail.com' },
      { icon: '🔗', label: 'My LinkedIn profile.', type: 'linkedin', href: 'https://www.linkedin.com/in/shubh--khandelwal/' },
      { icon: '💻', label: 'My Github account.', type: 'github', href: 'https://github.com/ShUbHkHaNdElWaL493' },
    ],
    state: 'Rover Activation',
  },
];
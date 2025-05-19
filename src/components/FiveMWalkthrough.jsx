import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const steps = [
  {
    title: 'Step 1',
    heading: 'Acquire Your FiveM Server Hosting Package',
    content: `Go to GoodLeaf.com and click on FiveM Hosting. Choose the FiveM Hosting Package that fits your needs, keeping in mind the number of players you are expecting to play. Choose the hosting location that's closest to your players for the best performance. Complete the checkout process and receive access to your control panel in the welcome email.`
  },
  {
    title: 'Step 2',
    heading: 'How to Setup Your FiveM Keymaster License',
    content: `Visit Keymasterfivem.net to obtain a license key for your FiveM Server. On Keymasterfivem.net, go to "Register a new server" and create a display name for your server. To get the IP address, switch back to your GoodLeaf control panel, and look for the globe in the top center of the screen. Your IP is a set of four numbers separated by dots and ending at the colon; the number after the colon is your port number; you don't need that. Copy your IP address switch back to Keymasterfivem.net, and paste your IP in the "Initial server IP address" field. For Server Type, click the drop-down and select "VPS", in the Server Provider field, and enter "GoodLeaf". Click the captcha "I'm not a robot" box, and then click the "GENERATE" button. When the screen reloads, your license key is in the center of the screen. Click the "COPY" link to copy your license key. Switch back to your GoodLeaf control panel. In the lower part of the left-hand menu, look for "STARTUP" and click it. When the screen reloads, look for the "VARIABLES" section near the upper left-hand part of the page, under "FIVEM LICENSE" remove the default "changeme"text, and paste your license key in the field.`
  },
  {
    title: 'Step 3',
    heading: 'Changing the Maximum Number of Players',
    content: `When you start your server by default it's only going to allow a maximum of 20 players, if you want to change the number of players look in the lefthand sidebar for a link labeled "File Manager" and click it. On the next screen in the center panel scroll down near the bottom of the list look for a link labeled "server.properties" click it. On the next screen scroll down and look for the line with "21 Max players", change the number to to whatever you want (maximum 1000 players). Scroll back up to the top of the page and on the right hand side of the page look for a bright blue button labeled "SAVE CONTENT" and click it. In the lefthand sidebar click the link that says "CONSOLE", on the main console page look for the green button in the upper right labeled "START" and click it to start your server. It may take up to a minute for your changes to take effect.`
  },
  {
    title: 'Step 4',
    heading: 'How to Add Scripts to Your FiveM Server',
    content: `If you want to add scripts to your FiveM Server, go to the "SERVER MANAGEMENT" section of the left-hand menu and click on "FILE MANAGER" near the top of the list. Switch to the folder on your computer where you have the ZIP file you want to upload. You can DRAG-AND-DROP the ZIP file in the "/home/container/" section in the middle part of the page, or you can use the "UPLOAD" button in the upper right-hand side of the screen. Once your file is uploaded, click on the file and "UNARCHIVE" it. Once the file is unarchived, you can remove it by checking the box next to the filename and then clicking the "DELETE" button at the bottom of the screen. Locate the folder you just unarchived in the center panel and then click the three dots on the far right for that folder. When the dialog box pops up, click rename, click your mouse into the field with the name of the folder, and copy it. Click the "X" in the upper right to close the window. In the main center panel, look for server.cfg and click it to edit the file. When the editing screen for server.cfg reloads, look for the section labeled "#These resources will start by default" and locate the last line that starts with "ensure." Hit return to create a new line. On the new line type "ensure" followed by a space, and then paste the name of the folder you copied. Click the "SAVE CONTENT" button on the upper right-hand side of the screen.`
  },
  {
    title: 'Step 5',
    heading: 'Starting Your FiveM Server',
    content: `Switch back to the main GoodLeaf control panel, in the upper right-hand side of the screen are two buttons to "START" or "RESTART" your FiveM Server. It may take up to 5 minutes for your server to complete the startup process.`
  }
];

export default function FiveMWalkthrough() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
        <span className="text-blue-500 block">How To Set Up FiveM Server</span>
        <span className="text-white block">Hosting Walkthrough</span>
      </h2>
      <div className="space-y-2">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col">
            <button
              className="flex items-center w-full text-left focus:outline-none py-2 transition-colors"
              onClick={() => toggleDropdown(idx)}
              aria-expanded={openIndex === idx}
              style={{background: 'none', border: 'none', padding: 0}}
            >
              <span className="text-2xl md:text-3xl font-extrabold text-blue-500 min-w-[110px]">
                Step {idx + 1}
              </span>
              <span className="text-lg md:text-xl font-semibold text-white ml-2">
                {step.heading}
              </span>
              <span className="ml-2 text-blue-500 text-xl font-bold flex items-center">
                {openIndex === idx ? <IoChevronUp /> : <IoChevronDown />}
              </span>
            </button>
            {openIndex === idx && (
              <div className="mt-2 ml-[110px]">
                <p className="text-base text-white leading-relaxed font-normal whitespace-pre-line">{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{359:function(t,e,r){t.exports=r.p+"assets/img/about-printer.3ce323de.png"},522:function(t,e,r){"use strict";r.r(e);var a=r(42),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"before-you-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start"}},[t._v("#")]),t._v(" Before you start")]),t._v(" "),a("p",[t._v("This document contains important points that "),a("em",[a("strong",[t._v("each user has to be fimiliar with")])]),t._v(" before starting working with Aura.Connect")]),t._v(" "),a("h2",{attrs:{id:"usage-hazards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-hazards"}},[t._v("#")]),t._v(" Usage hazards")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("There are certain scenarios which can be dangerous while using Aura.Connect and Composer printers. These scenarios and ways to prevent them are listed below")])]),t._v(" "),a("h3",{attrs:{id:"sending-commands-via-terminal-mid-print"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-commands-via-terminal-mid-print"}},[t._v("#")]),t._v(" Sending commands via "),a("RouterLink",{attrs:{to:"/aura-connect/gui/#terminal-interactive-control"}},[t._v("Terminal")]),t._v(" mid print")],1),t._v(" "),a("p",[t._v("While the "),a("RouterLink",{attrs:{to:"/aura-connect/gui/#terminal-interactive-control"}},[t._v("Terminal")]),t._v(" may be useful and seems harmless to use, it's dangerous to send commands to a printer that is currently printing, because the "),a("strong",[t._v("commands that you send in such case will be put into a printer command queue and "),a("em",[t._v("won't execute immideately")])]),t._v(", which can cause unwanted results or even a tragedy")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("SOLUTION")]),t._v(" "),a("p",[t._v("Don't send commands to a printer mid print, unless "),a("strong",[t._v("you're sure it's safe")]),t._v(" and you know what you're doing")])]),t._v(" "),a("h3",{attrs:{id:"printing-without-required-materials-or-with-incorrect-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#printing-without-required-materials-or-with-incorrect-materials"}},[t._v("#")]),t._v(" Printing without required materials or with incorrect materials")]),t._v(" "),a("p",[t._v("Starting a job remotely may cause you to forget to check the loaded materials on the printer's spools. This can lead to some spools not being loaded with the material required to perform a print. This kind of mistake will result in a failed print and/or a waste of materials")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("SOLUTION")]),t._v(" "),a("p",[t._v("Always make sure that the printer's spools are loaded with all the necessary materials required to perform a print")])]),t._v(" "),a("h3",{attrs:{id:"not-removing-printed-parts-before-subsequent-prints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-removing-printed-parts-before-subsequent-prints"}},[t._v("#")]),t._v(" Not removing printed parts before subsequent prints")]),t._v(" "),a("p",[t._v("Printer's screen will notify the user when it's done printing. "),a("strong",[t._v("You must remove the printed part from the buildplate, before pressing the 'OK' button on the printer's 'Finished' screen")]),t._v(". If you forget to do that, and start a new print - it will be printed over the part that's still on the buildplate, which can damage the printer or result in a bad print")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("SOLUTION")]),t._v(" "),a("p",[t._v("Before starting each print always make sure that the build plate is clean and does not contain any foreign object which can obstruct the print")])]),t._v(" "),a("h3",{attrs:{id:"not-ensuring-the-safety-of-a-print-when-starting-it-remotely"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-ensuring-the-safety-of-a-print-when-starting-it-remotely"}},[t._v("#")]),t._v(" Not ensuring the safety of a print when starting it remotely")]),t._v(" "),a("p",[t._v("Due to remote opeartion capability provided by Aura.Connect, you may forget to check if the printing area is safe for a print. There may be other people operating the buildplate or performing printer maintenance. If you start a print during that time, you could harm those people")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("SOLUTION")]),t._v(" "),a("p",[t._v("Always make sure that it's safe to start printing. No other people should be operating on the printer physically at the moment of starting a new print")])]),t._v(" "),a("h3",{attrs:{id:"more-safety"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-safety"}},[t._v("#")]),t._v(" More safety!")]),t._v(" "),a("p",[t._v("Hazards described above are mostly possible due to the remote printer operation capabilities provided by Aura.Connect, but there are many more potential hazards, that may occur if the printer is used incorrectly")]),t._v(" "),a("p",[t._v("We "),a("strong",[t._v("strongly encourage")]),t._v(" you to familiarize yourself with the full list of potential hazards in the "),a("a",{attrs:{href:"https://support.anisoprint.com/composer/manual/#safety-instructions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manual"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"compatible-hardware-and-printer-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatible-hardware-and-printer-firmware"}},[t._v("#")]),t._v(" Compatible hardware and printer firmware")]),t._v(" "),a("p",[t._v("Before connecting your printer to Aura.Connect, please ensure that it meets the following requirements:")]),t._v(" "),a("ol",[a("li",[t._v('The machine has network capabilities (the machine version contains "nw", e.g. "1.0.5nw")')]),t._v(" "),a("li",[t._v("The machine firmware version is 1.2.6 or later")]),t._v(" "),a("li",[t._v("The machine Network bridge software version is 1.1.1 or later (the update is finished on the printer restart, so please restart your printer before checking the version)")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(359),alt:"About printer"}})]),t._v(" "),a("p",[t._v("You can check everything on the machine on the About printer screen, which is located in the Maintenance menu.")]),t._v(" "),a("p",[t._v("The latest firmware can be downloaded "),a("a",{attrs:{href:"https://support.anisoprint.com/composer/firmware-downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". The Network bridge software is updated automatically if a printer is connected to the Internet, please refer to the "),a("a",{attrs:{href:"https://support.anisoprint.com/composer/manual/#network-bridge-software-updating",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manual"),a("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),a("h2",{attrs:{id:"aura-connect-specific-terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aura-connect-specific-terminology"}},[t._v("#")]),t._v(" Aura.Connect specific terminology")]),t._v(" "),a("p",[t._v("If, while reading the documentation, you're having troubles understanding the terminology, refer to "),a("RouterLink",{attrs:{to:"/aura-connect/terminology/"}},[t._v("Aura.Connect terminology")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);
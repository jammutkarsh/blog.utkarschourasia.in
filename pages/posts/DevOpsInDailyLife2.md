---
title: DevOps In Daily Life Part 2
date: 2022/10/5
description: Automation of G-Suite by writng some scrips. Part 2
author: Utkarsh Chourasia
/* image: https://shud-og.vercel.app/api/og?title=Notes%20on%20A%20Programmable%20Web%20by%20Aaron%20Swartz. */
---

In [part 1](/posts/DevOpsInDailyLife1)  we learnt about a workflow problem. In this, the 2nd part we are going to solve it, using some JavaScript code!

## App Script

You can find the whole overview [here](https://developers.google.com/apps-script/overview). In short it is Google's flavour of JavaScript and a low-code platform to programmatically automate Google Suite line of products.

A few things which I discovered are

1. Notify us is someone accesses our document.
2. Send messages using 3rd party integration to Discord or Slack channels when an event is triggered. (say a Google Form is submitted.)
3. Export PDF and send mail of some reports.
4. Upload data and use the template of a Google Sheet to automatically populate it.
5. Export Resume and Cover Letter to PDF.

The list is only limited by your creativity. In the end, it comes down to programming!

_PS:Additionally, you gained a basic understanding of continuous integration and delivery (CI/CD). Continuously integrating changes to the pro-docs; continuously delivering pro-docs to various platforms._

### Technical Overview

It's time to start writing some code now. Here is what we are going to do in our code.

- Delete all the files in the folder.
- Generate a new Resume.PDF
- Generate a new CoverLetter.PDF

### Steps

- **STEP 1:** Open [App Script](https://script.google.com/home) and start a new project. Maybe rename it.
- **STEP 2:** Remove the boiler plate code from the project
- **STEP 3:** Paste the following code

```js
const resumeID = DriveApp.getFileById('Your Resume Doc ID')
const coverLetterID = DriveApp.getFileById('Your Cover Letter Doc ID')
const exportFolderID = 'Your Folder ID'

function myFunction() {
  const files = DriveApp.getFolderById(exportFolderID).getFiles()
  while (files.hasNext()) {
    files.next().setTrashed(true)
  }
  generateResume()
  generateCoverLetter()
}

function generateResume() {
  var blob = resumeID.getAs('application/pdf')
  DriveApp.getFolderById(exportFolderID)
    .createFile(blob)
    .setName('Resume')
}

function generateCoverLetter() {
  var blob = coverLetterID.getAs('application/pdf')
  DriveApp.getFolderById(exportFolderID)
    .createFile(blob)
    .setName('General Cover Letter')
}
```

- **STEP 4:** Replace the `coverLetterID`, `resumeID` and `exportFolderID` with your specific document IDs.

These ID are present in the URL when you open the document in a tab.

For example, `https://docs.google.com/document/d/HelloThisIsTheIDOverHereAbCdEfGh123456/edit`, we need the portion after `d/` and before `/edit`. (This is what we require; `HelloThisIsTheIDOverHereAbCdEfGh123456`)

![Document ID Extraction](https://raw.githubusercontent.com/busy-in-life/Blog-Image/main/DevOpsInDailyLife/DocID.png)

The folderID will be something like `https://drive.google.com/drive/u/0/folders/HereIsTheFolderIDYouMustBeLookingFor` the last section after `folders/`. (This is what we require;`HereIsTheFolderIDYouMustBeLookingFor`)

![Folder ID Extraction](https://raw.githubusercontent.com/busy-in-life/Blog-Image/main/DevOpsInDailyLife/FolderID.png)

- **STEP 5:** Save the script, `ctrl/cmd + s` or you will see a save icon
- **STEP 6:** Run it! `ctrl/cmd + r` or you will see a play icon

On the first run, you will be asked for permission. Allow them and you will be good to go.
_Here is some pictorial flow!_

![1](/images/DevOpsInDailyLife2/Auth1.png)
![2](/images/DevOpsInDailyLife2/Auth2.png)
![3](/images/DevOpsInDailyLife2/Auth3.png)

No errors in the execution log? Yes? Check the folder and you will have your PDF versions of the pro-docs.

Here, we end our automation. In the last and 3rd part(coming soon), we take a deeper dive into the code and try to understand what it means.

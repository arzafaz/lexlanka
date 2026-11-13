# LexLanka: Sri Lankan Legal Rights Pocket Guide

An offline React Native (Expo) app that helps people understand common legal rights in Sri Lanka. Built for ICA 03 (Individual React Native Project).

## Features
- Browse laws by category (Consumer, Traffic, Labour, Property, Cyber, Family, Citizen Rights)
- Search laws by title, act or keyword
- Filter laws by category
- Detailed view with summary, key points, penalty/remedy and an example scenario
- Bookmark laws and view them later
- Emergency contacts list (tap to dial on a phone)
- "Law of the Day" on the home screen
- Works fully offline: no APIs or online databases

## Screens
1. Home
2. Categories
3. Law List (search and filters)
4. Law Detail
5. Bookmarks
6. Emergency Contacts

## Tech Stack
- React Native with Expo
- React Navigation (native stack and bottom tabs)
- Local JSON datasets (`src/data/laws.json`, `src/data/contacts.json`)
- AsyncStorage for bookmarks

## Project Structure
```
App.js
src/
  components/   LawCard
  data/         laws.json, contacts.json
  db/           bookmarks.js
  navigation/   AppNavigator.js
  screens/      Home, Categories, LawList, LawDetail, Bookmarks, Contacts
  theme.js
```

## How to Run
```
npm install
npx expo start
```
Press `w` for web, or scan the QR code with Expo Go on a phone.

## Screenshots
![Home](screenshots/home.png)
![Law List](screenshots/law-list.png)
![Law Detail](screenshots/law-detail.png)

## Disclaimer
For general information only. Not a substitute for legal advice.
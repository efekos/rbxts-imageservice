# ImageService
A lightweight module to store image ids for roblox-ts


This package simply adds a class called ImageService. you can store images to it and get all your image ids from there instead of copy-pasting them everywhere.

Example Usage:
```ts
//--- client/main.client.ts ---
const Gui = Players.LocalPlayer.WaitForChild("PlayerGui").FindFirstChild("Menu") as ScreenGui

const Homebutton = Gui.WaitForChild("Home") as ImageButton
Homebutton.Image = ImageService.getImage("homeIcon")
```
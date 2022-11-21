# @rbxts/imageservice
A lightweight module to store image ids for roblox-ts


This package simply adds a class called ImageService. you can store images to it and get all your image ids from there instead of copy-pasting them everywhere.

Since every class stores the image ids to itself, this service should be identified at a module script and imported from there in every use. Here's an example of usage:
```ts
//--- shared/services.ts ---
import * as imageservice from "@rbxts/imageservice"

//If you gonna call it with another name like 'Images' or something else, you can import it normally like 'import {ImageService} from "@rbxts/imageservice"'
export const ImageService = new imageservice.ImageService();
ImageService.addImage("homeIcon","rbxassetid://495284368");

//--- client/main.client.ts ---
import {ImageService} from "./shared/services.ts"

//...

const Homebutton = Gui.WaitForChild("Home") as ImageButton
Homebutton.Image = ImageService.getImage("homeIcon")
```

Hope it helps you.

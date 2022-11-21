/**
 * An Image Service is to store image ids with names so you don't have to remember all ids every time.
 * 
 * Since it not saves the images to a global value (yet), it should be identified in a module and imported from there in every use.
 */
const BadgeService = game.GetService("BadgeService");

export class ImageService{
    private images:ImageList


    constructor(){
        this.images = {}
    }

    /**
     * Adds an image. you can use this with {@link ImageService.getImage()}.
     * @param name the name of the image which gonna be used when getting or removing this image.
     * @param id The id of image. must be like 
     * @returns Whenever the image is added succesfully or not.
     */
    addImage(name:string,id:`rbxassetid://${string}` | number):boolean {
        if(this.images[name] === undefined) return false;

        try {
            this.images[name] = id as string
            return true
        } catch {
            return false
        }
    }

    /**
     * Returns an image from stored images. returns undefined if it can't find the image.
     * @param name name of the image.
     * @returns Image id if found.
     */
    getImage(name:string):string | undefined{
        return this.images[name]
    }

    /**
     * @returns All images stored to this ImageService.
     */
    getAllImages():ImageList {
        return this.images
    }

    /**
     * Removes an image.
     * @param name Name of the image.
     * @returns Whenever the image is removed successfully or not.
     */
    removeImage(name:string):boolean {
        if(this.images[name] === undefined) return false;

        try{
            delete this.images[name]
            return true;
        } catch {
            return false;
        }
    }
}

export type ImageList = {[any:string]:string}
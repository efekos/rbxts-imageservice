/**
* An Image Service is to store image ids with names so you don't have to remember all ids every time.
* 
* Since it not saves the images to a global value (yet), it should be identified in a module and imported from there in every use.
*/
export class ImageService{
    private static images:ImageList

    /**
     * Adds an image. you can use this with {@link ImageService.getImage()}.
     * @param name the name of the image which gonna be used when getting or removing this image.
     * @param id The id of image. must be like 
     * @returns Whenever the image is added succesfully or not.
     */
    static addImage(name:string,id:`rbxassetid://${string}` | number):boolean {
        if(ImageService.images[name] === undefined) return false;

        try {
            ImageService.images[name] = id as string
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
    static getImage(name:string):string | undefined{
        return ImageService.images[name]
    }

    /**
     * @returns All images stored to this ImageService.
     */
    static getAllImages():ImageList {
        return ImageService.images
    }

    /**
     * Removes an image.
     * @param name Name of the image.
     * @returns Whether the image was successfully removed
     */
    static removeImage(name:string):boolean {
        if(ImageService.images[name] === undefined) return false;

        try{
            delete ImageService.images[name]
            return true;
        } catch {
            return false;
        }
    }
}

/**
 * Stores the images of a {@link ImageService}
 */
export type ImageList = {[any:string]:string}
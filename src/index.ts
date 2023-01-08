const images:ImageList = {}

/**
* An Image Service is to store image ids with names so you don't have to remember all ids every time.
* 
* Since it not saves the images to a global value (yet), it should be identified in a module and imported from there in every use.
*/
export class ImageService{

    /**
     * Adds an image. you can use this with {@link ImageService.getImage()}.
     * @param name the name of the image which gonna be used when getting or removing this image.
     * @param id The id of image. must be like 
     * @returns Whenever the image is added succesfully or not.
     */
    addImage(name:string,id:`rbxassetid://${string}` | number):boolean {
        if(images[name] === undefined) return false;

        try {
            images[name] = id as string
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
        return images[name]
    }

    /**
     * @returns All images stored to this ImageService.
     */
    getAllImages():ImageList {
        return images
    }

    /**
     * Removes an image.
     * @param name Name of the image.
     * @returns Whether the image was successfully removed
     */
    removeImage(name:string):boolean {
        if(images[name] === undefined) return false;

        try{
            delete images[name]
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
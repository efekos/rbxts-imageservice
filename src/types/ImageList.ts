import ImageService from "../classes/ImageService"

/**
 * An image list that used to store images at {@link ImageService}
 * 
 * @example {badgeIcon1: "rbxassetid://293462348",badgeIcon2: "rbxassetid://495823498"}
 */
export type ImageList = {[any:string]:string}
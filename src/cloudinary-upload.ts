import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { error } from 'winston';

export function uploads(
    file: string,
    public_id?: string,
    overwritten?: boolean,
    invalidate?:boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file, 
            {
                public_id,
                overwritten,
                invalidate,
                resource_type: 'auto'
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined)=> {
                if(error){
                    resolve(error)
                }
                else{
                    resolve(result)
                }
            }

        )
    })
}

export function videoUpload(
    file: string,
    public_id?: string,
    overwritten?: boolean,
    invalidate?:boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file, 
            {
                public_id,
                overwritten,
                invalidate,
                chunk_size: 50000,
                resource_type: 'video'
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined)=> {
                if(error){
                    resolve(error)
                }
                else{
                    resolve(result)
                }
            }

        )
    })
}
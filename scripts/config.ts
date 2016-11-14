
// S3 Upload Options
interface S3Options {
  region: string;
}

export interface S3ClientOptions {
  maxAsyncS3: number;     // this is the default
  s3RetryCount: number;    // this is the default
  s3RetryDelay: number; // this is the default
  multipartUploadThreshold: number; // this is the default (20 MB)
  multipartUploadSize: number; // this is the default (15 MB)
  s3Options: S3Options;
}

interface S3Params {
  Bucket: string;
  Prefix: string;
  CacheControl?: string;
}

export interface S3ClientUploaderOptions {
  localDir?: string;
  localFile?: string;
  s3Params: S3Params;
  on: Function;
  progressAmount: "string";
  progressTotal: "string";
}

export const S3_CLIENT_OPTIONS: S3ClientOptions = {
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    region: "us-east-1",
  },
};

// Local defined Constants
export const BUCKET: string = "tylor-blog-assets";
export const APP_DEST: string = "./dist/";
export const VERSION_FILE_NAME: string = "version";
export const PREFIX: string = "desktop_web";
export const DEPLOY_TARGET_FILE: string = "./dist/bundle.js.gz";

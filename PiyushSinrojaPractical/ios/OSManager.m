//
//  OSManager.m
//  PiyushSinrojaPractical
//
//  Created by Admin on 20/12/20.
//

#import "PiyushSinrojaPractical-Swift.h"

#import "OSManager.h"
@implementation OSManager
RCT_EXPORT_MODULE();
RCT_REMAP_METHOD(isAppRunningOnDevice, isAppRunningOnDeviceWithResolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  OSManagerFile *osManager = [(OSManagerFile*)[OSManagerFile alloc]init];
  NSString *message = [osManager isRunningOnDevice];
  resolve(message);
}

@end


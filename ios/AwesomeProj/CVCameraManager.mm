//
//  RCTCVCameraManager.m
//  AwesomeProj
//
//  Created by Calvin Dong on 8/17/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CVCameraManager.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"
#import "CVCamera.h"
#import "RCTComponent.h"

@implementation CVCameraManager

RCT_EXPORT_MODULE()

- (CVCamera *)view
{
  CVCamera *cam = [[CVCamera alloc] init];
  return cam;
  
  
}

RCT_EXPORT_VIEW_PROPERTY(reactTag, NSNumber)

@end
//
//  ViewController.m
//  AwesomeProj
//
//  Created by Calvin Dong on 8/15/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Availability.h>
#import <Foundation/Foundation.h>
#undef NO
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import <opencv2/opencv.hpp>
#import <opencv2/videoio/cap_ios.h>
using namespace cv;
@interface ViewController : UIViewController<CvVideoCameraDelegate>
{
       IBOutlet UIImageView* imageView;
       IBOutlet UIButton* button;
  
  
  
}

 - (IBAction)actionStart:(id)sender;
@property (nonatomic, retain) CvVideoCamera* videoCamera;
@end

@implementation ViewController


#pragma mark - UI Actions

 - (IBAction)actionStart:(id)sender;
 {
       [self.videoCamera start];
  }

- (void)viewDidLoad
{
       [super viewDidLoad];
       // Do any additional setup after loading the view, typically from a nib.
  
       self.videoCamera = [[CvVideoCamera alloc] initWithParentView:imageView];
       self.videoCamera.defaultAVCaptureDevicePosition = AVCaptureDevicePositionFront;
       self.videoCamera.defaultAVCaptureSessionPreset = AVCaptureSessionPreset352x288;
       self.videoCamera.defaultAVCaptureVideoOrientation = AVCaptureVideoOrientationPortrait;
       self.videoCamera.defaultFPS = 30;
  
}

- (void)processImage:(Mat&)image;
{
  // Do some OpenCV stuff with the image
}

 @end

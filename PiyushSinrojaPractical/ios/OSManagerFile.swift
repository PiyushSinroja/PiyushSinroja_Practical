//
//  OSManager.swift
//  PiyushSinrojaPractical
//
//  Created by Admin on 20/12/20.
//

import Foundation

@objc(OSManagerFile)

class OSManagerFile: NSObject {
  
  @objc
    static func requiresMainQueueSetup() -> Bool {
      return true
    }
  
  @objc func isRunningOnDevice() -> String {
    #if targetEnvironment(simulator)
      return "App Running on iOS Simulator"
    #else
     return "App Running on iOS Device"
    #endif
  }
}

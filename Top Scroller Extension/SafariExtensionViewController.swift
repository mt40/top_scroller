//
//  SafariExtensionViewController.swift
//  Top Scroller Extension
//
//  Created by Thai Minh on 8/15/20.
//  Copyright © 2020 Minh Thai. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}

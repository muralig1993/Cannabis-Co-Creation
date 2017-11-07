//
//  ViewController.swift
//  Grasshoppr
//
//  Created by Jose Canizares on 11/6/17.
//  Copyright © 2017 Jose Canizares. All rights reserved.
//

import UIKit

class CreateProfileViewController: UIViewController, UITextFieldDelegate {
    
    
    
    @IBOutlet weak var nameField: UITextField!
    


    override func viewDidLoad() {
        
        
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(hideKeyboard))
        view.addGestureRecognizer(tapGesture)
        
        var button = UIButton(frame: CGRect(x: 100, y: 200, width: 80, height: 40))
        button.backgroundColor = .white
        button.setTitle("sativa", for: .normal)
        button.setTitleColor(UIColor( red: 0.5, green: 0.5, blue:0, alpha: 1.0 ), for: .normal)
        button.layer.borderWidth = 1.5
        button.layer.cornerRadius = button.frame.height/2
        button.layer.borderColor = (UIColor( red: 0.5, green: 0.5, blue:0, alpha: 1.0 )).cgColor
        self.view.addSubview(button)
        
        nameField.delegate = self
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        view.endEditing(true)
        return true
    }
    
    @objc func hideKeyboard() {
        view.endEditing(true)
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}


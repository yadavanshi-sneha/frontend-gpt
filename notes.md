sudo ./svc.sh install    # Install the runner as a service
sudo ./svc.sh start      # Start the runner service
sudo ./svc.sh stop       # Stop the runner service
sudo ./svc.sh uninstall  # Remove the service


<!-- cmd for delete dir config.sh -->

 1. sudo systemctl stop actions.runner.yadavanshi-sneha-frontend-gpt.ip-172-31-17-229.service 

 2. sudo systemctl disable actions.runner.yadavanshi-sneha-frontend-gpt.ip-172-31-17-229.service

 3. sudo rm /etc/systemd/system/actions.runner.yadavanshi-sneha-frontend-gpt.ip-172-31-17-229.service

 4. sudo systemctl daemon-reload

 5. ls /etc/systemd/system/ | grep frontend-gpt

 := sudo systemctl restart  nginx ( cmd to start nginx)

dist in react is store to build files . 
 
 sudo systemctl reload nginx



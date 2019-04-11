Online documentation: https://docs.trynearme.app/en/

Droplet Name: dokku-s-1vcpu-2gb-sgp1-01
IP Address: 178.128.223.209
Username: root
Password: bdd5fcfa7f02cef53c3304aa0e
New password : nareine29
Password for SSH key : nareine

Password for release-key to sign the apk : nareine
To sign:

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore tastycam_unsign.apk alias_name

/Users/mekongarthouse/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 tastycam_unsign.apk tastycam.apk
import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './Upload.css';

const CLOUDINARY_UPLOAD_PRESET = 'level_up';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/anderson0741/upload';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: ""
        };
    }
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }
    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            console.log(response)
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    render() {
        return(
        <div>
            <div className="FileUpload">
                
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>

            </div>
            <div>
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img src={this.state.uploadedFileCloudinaryUrl} />
                    </div>}
            </div>
        </div>)
    }
}


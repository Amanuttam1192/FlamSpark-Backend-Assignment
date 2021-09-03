
const sharp   = require('sharp');

exports.processImage = async (req, res, next) => {    
    try {  

        var {width, height , quality } = req.query; 
        // console.log(height,width,quality);
        if(typeof height !=="undefined"){
            height = Number(height);
        }
        if(typeof width !== "undefined"){
            width = Number(width);
        }
        if(typeof quality !=="undefined"){
            quality = Number(quality);
            quality = Math.min(quality, 100);
        }
        var result;
        if(req.file.mimetype==='image/jpeg' || req.file.mimetype==='image/jpg'){
            result = await sharp(req.file.path).resize({width:width,height:height}).jpeg({quality:quality}).toFile('result.jpeg');
        } 
        else if(req.file.mimetype==='image/png'){
            result = await sharp(req.file.path).resize({width:width,height:height}).png({quality: quality}).toFile('result.png');
        }
        
        res.json({message:'done',data:result});
    }
    catch(err) {
        next(err);
    }
   
} 
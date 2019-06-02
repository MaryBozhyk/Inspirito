const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(request, responce){
    responce.send('Wellcome!')
});

data = {
    "id":"1",
    "label":"A",
    "children":[
        {
            "id":"2",
            "label":"B",
            "children":[
                {
                    "id":"5",
                    "label":"E"
                },
                {
                    "id":"6",
                    "label":"F"
                },
                {
                    "id":"7",
                    "label":"G"
                }
            ]
        },
        {
            "id":"3",
            "label":"С"
        },
        {
            "id":"4",
            "label":"D",
            "children":[
                {
                    "id":"8",
                    "label":"H"
                },
                {
                    "id":"9",
                    "label":"I"
                }
            ]
        }
    ]
}

app.get('/data', function(req, res){
    res.send(data)
})

app.listen(8080, function(){
    console.log('listen on port')
})
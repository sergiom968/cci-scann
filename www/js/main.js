function scan(){
	//alert('scan')
	content.$data.datos = {Image: "qr.png"}
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			if(!result.cancelled){
				if(result.format == "QR_CODE"){
					$.ajax({
						url: "http://31.220.57.97:3000/api/scan",
						method: "POST",
						data: {text: result.text},
						dataType: "json"
					})
					.done(function (res) {
						if(res.code == 200){
							res.data.Image = 'check.png'
							res.data.Msg = 'Usario Verificado'
						}else{
							console.log('error')
							res.data.Image = 'error.png'
							res.data.Msg = 'Usario no encontrado'
						}
						content.$data.datos = res.data
					})
					.fail(function (err){
						console.log(err.message)
					})
				}
			}
		},
		function (error) {
			Materialize.toast('Error en la lectura del código', 3000, 'rounded');  
		}
   );
}
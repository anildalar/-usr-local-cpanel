//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sslinstall.js
// Generated: /usr/local/cpanel/base/sharedjs/sslinstall-es_es.js
// Module:    legacy_shared/sslinstall-es_es
// Locale:    es_es
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"A user-defined description for the certificate.":"Una descripción definida por el usuario para el certificado.","Cancel":"Cancelar","Certificate":"Certificado","Certificate Authority Bundle":"Paquete CA","Certificates that do not have a domain associated with your account are not listed here.":"Aquí no se detallan los certificados que no tengan asociado un dominio con su cuenta.","Choose a certificate to install.":"Elija el certificado a instalar.","Choose a domain.":"Elija un dominio.","Choose a service.":"Elija un servicio.","Choose the account or Apache domain that contains the desired certificate to install. Then, select the certificate.":"Seleccione la cuenta o dominio Apache que incluye el certificado que desea instalar. A continuación, seleccione el certificado.","Description":"Descripción","Domain":"Dominio","Domain names on the certificate.":"Nombres de dominio en el certificado.","Domains":"Dominios","Enter a valid IP address.":"Indique una dirección IP válida.","Expiration":"Expiración","For more information, read our [output,url,_1,SSL Installation Workflow] documentation.":"For more information, read our [output,url,_1,SSL Installation Workflow] documentation.","Hide":"Ocultar","IP":"IP","Installing …":"Instalando …","Issuer":"Emisor","Issuer organization name.":"Nombre de la organización emisora.","Key":"Clave","Loading certificates for “[output,strong,_1]” …":"Cargando certificados para “[output,strong,_1]” …","Loading installed Apache certificates …":"Cargando certificados Apache instalados …","OK":"ACEPTAR","Provide or retrieve a certificate.":"Proporcione o recupere un certificado.","Provide or retrieve a key.":"Proporcione o recupere una clave.","SSL Certificate List":"Lista de certificados SSL","SSL Certificate Successfully Updated":"Certificado SSL actualizado correctamente","SSL Host Successfully Installed":"Host SSL instalado correctamente","SSL is installed; “[_1]” ([numerate,_2,alias,aliases] [list_and,_3]) is primary.":"SSL is installed; “[_1]” ([numerate,_2,alias,aliases] [list_and,_3]) is primary.","SSL is installed; “[_1]” is primary.":"SSL está instalado; “[_1]” es principal.","Select a certificate below:":"Seleccione un certificado a continuación:","Self-Signed":"Autofirmado","Service":"Servicio","Show":"Mostrar","The CA bundle does not match the certificate.":"El paquete CA no coincide con el certificado.","The CA bundle is invalid.":"El paquete CA no es válido.","The IP address “[_1]” is not available, or you do not have permission to use it.":"La dirección IP “[_1]” no está disponible o no tiene permiso para usarla.","The SSL certificate also supports [numerate,_1,this domain,these domains], but [numerate,_1,this domain does,these domains do] not refer to the SSL website mentioned above:":"The SSL certificate also supports [numerate,_1,this domain,these domains], but [numerate,_1,this domain does,these domains do] not refer to the SSL website mentioned above:","The SSL website is also accessible via [numerate,_1,this domain,these domains], but the certificate does not support [numerate,_1,it,them]. Web browsers will show a warning when accessing [numerate,_1,this domain,these domains] via HTTPS:":"The SSL website is also accessible via [numerate,_1,this domain,these domains], but the certificate does not support [numerate,_1,it,them]. Web browsers will show a warning when accessing [numerate,_1,this domain,these domains] via HTTPS:","The SSL website is now active and accessible via HTTPS on [numerate,_1,this domain,these domains]:":"The SSL website is now active and accessible via HTTPS on [numerate,_1,this domain,these domains]:","The certificate does not match your selected domain.":"El certificado no coincide con su dominio seleccionado.","The certificate information could not be retrieved because of an error: [_1]":"No fue posible recuperar la información del certificado debido a un error: [_1]","The certificate is not valid.":"El certificado no es válido.","The certificate list could not be retrieved because of an error: [_1]":"No fue posible recuperar la lista de certificados debido a un error: [_1]","The certificate’s expiration date":"La fecha de expiración del certificado","The key does not match the certificate.":"La clave no coincide con el certificado.","The key is invalid.":"La clave no es válida.","The lookup failed because of an error: [_1]":"La búsqueda resultó fallida debido a un error: [_1]","This SSL certificate was already installed.":"Este certificado SSL ya está instalado.","This account does not have any installable certificates.":"Esta cuenta no dispone de ningún certificado instalable.","This is not a valid domain.":"No se trata de un dominio válido.","To give website clients the best experience, ensure that each [asis,SSL] website’s certificate matches every domain on the website.":"Para ofrecer la mejor experiencia posible a los clientes del sitio web, cerciórese de que cada certificado [asis,SSL] del sitio web coincide con cada dominio en el sitio web.","Use Certificate":"Usar certificado","We recommend that users manage individual subdomains (e.g., “[_1]”, “[_2]”) instead of a single wildcard subdomain (e.g., “[_3]”).":"Recomendamos que los usuarios gestionen subdominios individuales (como “[_1]” o “[_2]”) en lugar de un único subdominio wildcard (como “[_3]”).","When you install a valid certificate onto a website, the system also configures email, calendar, web disk, and [asis,cPanel]-related services to use that certificate for all of the website’s domains that match the certificate. Requests to these services from [asis,SNI]-enabled clients via the matching domains will receive the installed certificate.":"Cuando instala un certificado válido en un sitio web, el sistema también configura servicios relacionados con [asis,cPanel], el correo, calendario y Web Disk para que usen dicho certificado para todos los dominios del sitio web que coincidan con el certificado. Las peticiones a estos servicios procedentes de clientes que tengan [asis,SNI] activado mediante los dominios coincidentes recibirán el certificado instalado.","You can manage all of your saved certificates on the [output,url,_1,“Certificates” page].":"You can manage all of your saved certificates on the [output,url,_1,“Certificates” page].","You have successfully configured SSL.":"SSL se ha configurado correctamente.","You have successfully updated the SSL website’s certificate.":"Ha actualizado correctamente el certificado del sitio web SSL."};

    if (!this.LEXICON) {
        this.LEXICON = {};
    }

    for(var item in newLex) {
        if(newLex.hasOwnProperty(item)) {
            var value = newLex[item];
            if (typeof(value) === "string" && value !== "") {
                // Only add it if there is a value.
                this.LEXICON[item] = value;
            }
        }
    }
})();
//~~END-GENERATED~~
<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfda43d784b8e2733685d3e748b02a38b
{
    public static $files = array (
        '383eaff206634a77a1be54e64e6459c7' => __DIR__ . '/..' . '/sabre/uri/lib/functions.php',
        '2b9d0f43f9552984cfa82fee95491826' => __DIR__ . '/..' . '/sabre/event/lib/coroutine.php',
        'd81bab31d3feb45bfe2f283ea3c8fdf7' => __DIR__ . '/..' . '/sabre/event/lib/Loop/functions.php',
        'a1cce3d26cc15c00fcd0b3354bd72c88' => __DIR__ . '/..' . '/sabre/event/lib/Promise/functions.php',
        '3569eecfeed3bcf0bad3c998a494ecb8' => __DIR__ . '/..' . '/sabre/xml/lib/Deserializer/functions.php',
        '93aa591bc4ca510c520999e34229ee79' => __DIR__ . '/..' . '/sabre/xml/lib/Serializer/functions.php',
        '7b11c4dc42b3b3023073cb14e519683c' => __DIR__ . '/..' . '/ralouphie/getallheaders/src/getallheaders.php',
        'ebdb698ed4152ae445614b69b5e4bb6a' => __DIR__ . '/..' . '/sabre/http/lib/functions.php',
        '6e3fae29631ef280660b3cdad06f25a8' => __DIR__ . '/..' . '/symfony/deprecation-contracts/function.php',
        '37a3dc5111fe8f707ab4c132ef1dbc62' => __DIR__ . '/..' . '/guzzlehttp/guzzle/src/functions_include.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Sabre\\Xml\\' => 10,
            'Sabre\\VObject\\' => 14,
            'Sabre\\Uri\\' => 10,
            'Sabre\\HTTP\\' => 11,
            'Sabre\\Event\\' => 12,
            'Sabre\\' => 6,
        ),
        'R' => 
        array (
            'RtfHtmlPhp\\' => 11,
            'Roundcube\\Composer\\' => 19,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Http\\Client\\' => 16,
        ),
        'M' => 
        array (
            'Masterminds\\' => 12,
        ),
        'G' => 
        array (
            'GuzzleHttp\\Psr7\\' => 16,
            'GuzzleHttp\\Promise\\' => 19,
            'GuzzleHttp\\' => 11,
        ),
        'D' => 
        array (
            'DASPRiD\\Enum\\' => 13,
        ),
        'B' => 
        array (
            'BaconQrCode\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Sabre\\Xml\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabre/xml/lib',
        ),
        'Sabre\\VObject\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabre/vobject/lib',
        ),
        'Sabre\\Uri\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabre/uri/lib',
        ),
        'Sabre\\HTTP\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabre/http/lib',
        ),
        'Sabre\\Event\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabre/event/lib',
        ),
        'Sabre\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabre/dav/lib',
        ),
        'RtfHtmlPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/roundcube/rtf-html-php/src',
        ),
        'Roundcube\\Composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/roundcube/plugin-installer/src',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/src',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-factory/src',
            1 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Http\\Client\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-client/src',
        ),
        'Masterminds\\' => 
        array (
            0 => __DIR__ . '/..' . '/masterminds/html5/src',
        ),
        'GuzzleHttp\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/psr7/src',
        ),
        'GuzzleHttp\\Promise\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/promises/src',
        ),
        'GuzzleHttp\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/guzzle/src',
        ),
        'DASPRiD\\Enum\\' => 
        array (
            0 => __DIR__ . '/..' . '/dasprid/enum/src',
        ),
        'BaconQrCode\\' => 
        array (
            0 => __DIR__ . '/..' . '/bacon/bacon-qr-code/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'N' => 
        array (
            'Net' => 
            array (
                0 => __DIR__ . '/..' . '/pear/net_smtp',
                1 => __DIR__ . '/..' . '/pear/net_socket',
            ),
        ),
        'M' => 
        array (
            'Mail' => 
            array (
                0 => __DIR__ . '/..' . '/pear/mail_mime',
            ),
        ),
        'C' => 
        array (
            'Console' => 
            array (
                0 => __DIR__ . '/..' . '/pear/console_commandline',
                1 => __DIR__ . '/..' . '/pear/console_getopt',
            ),
        ),
        'A' => 
        array (
            'Auth' => 
            array (
                0 => __DIR__ . '/..' . '/pear/auth_sasl',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Crypt_GPG' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG.php',
        'Crypt_GPGAbstract' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPGAbstract.php',
        'Crypt_GPG_BadPassphraseException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_DeletePrivateKeyException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_Engine' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Engine.php',
        'Crypt_GPG_Exception' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_FileException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_InvalidKeyParamsException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_InvalidOperationException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_Key' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Key.php',
        'Crypt_GPG_KeyGenerator' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/KeyGenerator.php',
        'Crypt_GPG_KeyNotCreatedException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_KeyNotFoundException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_NoDataException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_OpenSubprocessException' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Exceptions.php',
        'Crypt_GPG_PinEntry' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/PinEntry.php',
        'Crypt_GPG_ProcessControl' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/ProcessControl.php',
        'Crypt_GPG_ProcessHandler' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/ProcessHandler.php',
        'Crypt_GPG_Signature' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/Signature.php',
        'Crypt_GPG_SignatureCreationInfo' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/SignatureCreationInfo.php',
        'Crypt_GPG_SubKey' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/SubKey.php',
        'Crypt_GPG_UserId' => __DIR__ . '/..' . '/pear/crypt_gpg/Crypt/GPG/UserId.php',
        'Net_LDAP2' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2.php',
        'Net_LDAP2_Entry' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/Entry.php',
        'Net_LDAP2_Error' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2.php',
        'Net_LDAP2_Filter' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/Filter.php',
        'Net_LDAP2_LDIF' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/LDIF.php',
        'Net_LDAP2_RootDSE' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/RootDSE.php',
        'Net_LDAP2_Schema' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/Schema.php',
        'Net_LDAP2_SchemaCache' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/SchemaCache.interface.php',
        'Net_LDAP2_Search' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/Search.php',
        'Net_LDAP2_SimpleFileSchemaCache' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/SimpleFileSchemaCache.php',
        'Net_LDAP2_Util' => __DIR__ . '/..' . '/pear/net_ldap2/Net/LDAP2/Util.php',
        'Net_LDAP3' => __DIR__ . '/..' . '/kolab/net_ldap3/lib/Net/LDAP3.php',
        'Net_LDAP3_Result' => __DIR__ . '/..' . '/kolab/net_ldap3/lib/Net/LDAP3/Result.php',
        'Net_Sieve' => __DIR__ . '/..' . '/pear/net_sieve/Sieve.php',
        'OS_Guess' => __DIR__ . '/..' . '/pear/pear-core-minimal/src/OS/Guess.php',
        'PEAR' => __DIR__ . '/..' . '/pear/pear-core-minimal/src/PEAR.php',
        'PEAR_Error' => __DIR__ . '/..' . '/pear/pear-core-minimal/src/PEAR.php',
        'PEAR_ErrorStack' => __DIR__ . '/..' . '/pear/pear-core-minimal/src/PEAR/ErrorStack.php',
        'PEAR_Exception' => __DIR__ . '/..' . '/pear/pear_exception/PEAR/Exception.php',
        'System' => __DIR__ . '/..' . '/pear/pear-core-minimal/src/System.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfda43d784b8e2733685d3e748b02a38b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfda43d784b8e2733685d3e748b02a38b::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitfda43d784b8e2733685d3e748b02a38b::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitfda43d784b8e2733685d3e748b02a38b::$classMap;

        }, null, ClassLoader::class);
    }
}
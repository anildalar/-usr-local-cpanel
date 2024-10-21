package Cpanel::OS::Almalinux8;

# cpanel - Cpanel/OS/Almalinux8.pm                 Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited

use cPstrict;

use Cpanel::OS::Almalinux;
use parent 'Cpanel::OS::Rhel8';

use constant is_supported => 1;    # Almalinux 8

use constant pretty_distro => Cpanel::OS::Almalinux->pretty_distro;

use constant supports_imunify_360 => 1;

use constant supports_cpanel_cloud_edition => 1;

1;

__END__

=encoding utf-8

=head1 NAME

Cpanel::OS::Almalinux8 - Almalinux8 custom values

=head1 SYNOPSIS

    # you should not use this package directly
    #   prefer using the abstraction from Cpanel::OS

    use Cpanel::OS ();

=head1 DESCRIPTION

This package represents the supported C<Almalinux8> distribution.

You should not use it directly. L<Cpanel::OS> provides an interface
to load and use this package if your distribution is C<Almalinux8>.
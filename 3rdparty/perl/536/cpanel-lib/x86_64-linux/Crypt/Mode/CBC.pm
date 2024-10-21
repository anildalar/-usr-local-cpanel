package Crypt::Mode::CBC;

### BEWARE - GENERATED FILE, DO NOT EDIT MANUALLY!

use strict;
use warnings;
our $VERSION = '0.076';

use Crypt::Cipher;

sub encrypt {
  my ($self, $pt) = (shift, shift);
  local $SIG{__DIE__} = \&CryptX::_croak;
  $self->start_encrypt(@_)->add($pt) . $self->finish;
}

sub decrypt {
  my ($self, $ct) = (shift, shift);
  local $SIG{__DIE__} = \&CryptX::_croak;
  $self->start_decrypt(@_)->add($ct) . $self->finish;
}

sub CLONE_SKIP { 1 } # prevent cloning

1;

=pod

=head1 NAME

Crypt::Mode::CBC - Block cipher mode CBC [Cipher-block chaining]

=head1 SYNOPSIS

   use Crypt::Mode::CBC;
   my $m = Crypt::Mode::CBC->new('AES');

   #(en|de)crypt at once
   my $ciphertext = $m->encrypt($plaintext, $key, $iv);
   my $plaintext = $m->decrypt($ciphertext, $key, $iv);

   #encrypt more chunks
   $m->start_encrypt($key, $iv);
   my $ciphertext = $m->add('some data');
   $ciphertext .= $m->add('more data');
   $ciphertext .= $m->finish;

   #decrypt more chunks
   $m->start_decrypt($key, $iv);
   my $plaintext = $m->add($some_ciphertext);
   $plaintext .= $m->add($more_ciphertext);
   $plaintext .= $m->finish;

=head1 DESCRIPTION

This module implements CBC cipher mode. B<NOTE:> it works only with ciphers from L<CryptX> (Crypt::Cipher::NNNN).

=head1 METHODS

=head2 new

 my $m = Crypt::Mode::CBC->new($name);
 #or
 my $m = Crypt::Mode::CBC->new($name, $padding);
 #or
 my $m = Crypt::Mode::CBC->new($name, $padding, $cipher_rounds);

 # $name ....... one of 'AES', 'Anubis', 'Blowfish', 'CAST5', 'Camellia', 'DES', 'DES_EDE',
 #               'KASUMI', 'Khazad', 'MULTI2', 'Noekeon', 'RC2', 'RC5', 'RC6',
 #               'SAFERP', 'SAFER_K128', 'SAFER_K64', 'SAFER_SK128', 'SAFER_SK64',
 #               'SEED', 'Skipjack', 'Twofish', 'XTEA', 'IDEA', 'Serpent'
 #               simply any <NAME> for which there exists Crypt::Cipher::<NAME>
 # $padding .... 0 no padding (plaintext size has to be multiple of block length)
 #               1 PKCS5 padding, Crypt::CBC's "standard" - DEFAULT
 #               2 Crypt::CBC's "oneandzeroes"
 #               3 ANSI X.923 padding
 #               4 zero padding
 #               5 zero padding (+a block of zeros if the output length is divisible by the blocksize)
 # $cipher_rounds ... optional num of rounds for given cipher

=head2 encrypt

   my $ciphertext = $m->encrypt($plaintext, $key, $iv);

=head2 decrypt

   my $plaintext = $m->decrypt($ciphertext, $key, $iv);

=head2 start_encrypt

   $m->start_encrypt($key, $iv);

=head2 start_decrypt

   $m->start_decrypt($key, $iv);

=head2 add

   # in encrypt mode
   my $plaintext = $m->add($ciphertext);

   # in decrypt mode
   my $ciphertext = $m->add($plaintext);

=head2 finish

   #encrypt more chunks
   $m->start_encrypt($key, $iv);
   my $ciphertext = '';
   $ciphertext .= $m->add('some data');
   $ciphertext .= $m->add('more data');
   $ciphertext .= $m->finish;

   #decrypt more chunks
   $m->start_decrypt($key, $iv);
   my $plaintext = '';
   $plaintext .= $m->add($some_ciphertext);
   $plaintext .= $m->add($more_ciphertext);
   $plaintext .= $m->finish;

=head1 SEE ALSO

=over

=item * L<CryptX|CryptX>, L<Crypt::Cipher>

=item * L<Crypt::Cipher::AES>, L<Crypt::Cipher::Blowfish>, ...

=item * L<https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher-block_chaining_.28CBC.29>

=back

=cut

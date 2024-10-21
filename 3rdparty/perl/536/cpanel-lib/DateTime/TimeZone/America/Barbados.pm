# This file is auto-generated by the Perl DateTime Suite time zone
# code generator (0.08) This code generator comes with the
# DateTime::TimeZone module distribution in the tools/ directory

#
# Generated from /tmp/e7yZMmQoJl/northamerica.  Olson data version 2022a
#
# Do not edit this file directly.
#
package DateTime::TimeZone::America::Barbados;

use strict;
use warnings;
use namespace::autoclean;

our $VERSION = '2.52';

use Class::Singleton 1.03;
use DateTime::TimeZone;
use DateTime::TimeZone::OlsonDB;

@DateTime::TimeZone::America::Barbados::ISA = ( 'Class::Singleton', 'DateTime::TimeZone' );

my $spans =
[
    [
DateTime::TimeZone::NEG_INFINITY, #    utc_start
60294427109, #      utc_end 1911-08-28 03:58:29 (Mon)
DateTime::TimeZone::NEG_INFINITY, #  local_start
60294412800, #    local_end 1911-08-28 00:00:00 (Mon)
-14309,
0,
'LMT',
    ],
    [
60294427109, #    utc_start 1911-08-28 03:58:29 (Mon)
61261419600, #      utc_end 1942-04-19 05:00:00 (Sun)
60294412709, #  local_start 1911-08-27 23:58:29 (Sun)
61261405200, #    local_end 1942-04-19 01:00:00 (Sun)
-14400,
0,
'AST',
    ],
    [
61261419600, #    utc_start 1942-04-19 05:00:00 (Sun)
61273000800, #      utc_end 1942-08-31 06:00:00 (Mon)
61261408800, #  local_start 1942-04-19 02:00:00 (Sun)
61272990000, #    local_end 1942-08-31 03:00:00 (Mon)
-10800,
1,
'ADT',
    ],
    [
61273000800, #    utc_start 1942-08-31 06:00:00 (Mon)
61294078800, #      utc_end 1943-05-02 05:00:00 (Sun)
61272986400, #  local_start 1942-08-31 02:00:00 (Mon)
61294064400, #    local_end 1943-05-02 01:00:00 (Sun)
-14400,
0,
'AST',
    ],
    [
61294078800, #    utc_start 1943-05-02 05:00:00 (Sun)
61304968800, #      utc_end 1943-09-05 06:00:00 (Sun)
61294068000, #  local_start 1943-05-02 02:00:00 (Sun)
61304958000, #    local_end 1943-09-05 03:00:00 (Sun)
-10800,
1,
'ADT',
    ],
    [
61304968800, #    utc_start 1943-09-05 06:00:00 (Sun)
61315156800, #      utc_end 1944-01-01 04:00:00 (Sat)
61304954400, #  local_start 1943-09-05 02:00:00 (Sun)
61315142400, #    local_end 1944-01-01 00:00:00 (Sat)
-14400,
0,
'AST',
    ],
    [
61315156800, #    utc_start 1944-01-01 04:00:00 (Sat)
61323800400, #      utc_end 1944-04-10 05:00:00 (Mon)
61315142400, #  local_start 1944-01-01 00:00:00 (Sat)
61323786000, #    local_end 1944-04-10 01:00:00 (Mon)
-14400,
0,
'AST',
    ],
    [
61323800400, #    utc_start 1944-04-10 05:00:00 (Mon)
61337023200, #      utc_end 1944-09-10 06:00:00 (Sun)
61323787800, #  local_start 1944-04-10 01:30:00 (Mon)
61337010600, #    local_end 1944-09-10 02:30:00 (Sun)
-12600,
1,
'-0330',
    ],
    [
61337023200, #    utc_start 1944-09-10 06:00:00 (Sun)
61346779200, #      utc_end 1945-01-01 04:00:00 (Mon)
61337008800, #  local_start 1944-09-10 02:00:00 (Sun)
61346764800, #    local_end 1945-01-01 00:00:00 (Mon)
-14400,
0,
'AST',
    ],
    [
61346779200, #    utc_start 1945-01-01 04:00:00 (Mon)
62370626400, #      utc_end 1977-06-12 06:00:00 (Sun)
61346764800, #  local_start 1945-01-01 00:00:00 (Mon)
62370612000, #    local_end 1977-06-12 02:00:00 (Sun)
-14400,
0,
'AST',
    ],
    [
62370626400, #    utc_start 1977-06-12 06:00:00 (Sun)
62380299600, #      utc_end 1977-10-02 05:00:00 (Sun)
62370615600, #  local_start 1977-06-12 03:00:00 (Sun)
62380288800, #    local_end 1977-10-02 02:00:00 (Sun)
-10800,
1,
'ADT',
    ],
    [
62380299600, #    utc_start 1977-10-02 05:00:00 (Sun)
62397237600, #      utc_end 1978-04-16 06:00:00 (Sun)
62380285200, #  local_start 1977-10-02 01:00:00 (Sun)
62397223200, #    local_end 1978-04-16 02:00:00 (Sun)
-14400,
0,
'AST',
    ],
    [
62397237600, #    utc_start 1978-04-16 06:00:00 (Sun)
62411749200, #      utc_end 1978-10-01 05:00:00 (Sun)
62397226800, #  local_start 1978-04-16 03:00:00 (Sun)
62411738400, #    local_end 1978-10-01 02:00:00 (Sun)
-10800,
1,
'ADT',
    ],
    [
62411749200, #    utc_start 1978-10-01 05:00:00 (Sun)
62428687200, #      utc_end 1979-04-15 06:00:00 (Sun)
62411734800, #  local_start 1978-10-01 01:00:00 (Sun)
62428672800, #    local_end 1979-04-15 02:00:00 (Sun)
-14400,
0,
'AST',
    ],
    [
62428687200, #    utc_start 1979-04-15 06:00:00 (Sun)
62443198800, #      utc_end 1979-09-30 05:00:00 (Sun)
62428676400, #  local_start 1979-04-15 03:00:00 (Sun)
62443188000, #    local_end 1979-09-30 02:00:00 (Sun)
-10800,
1,
'ADT',
    ],
    [
62443198800, #    utc_start 1979-09-30 05:00:00 (Sun)
62460741600, #      utc_end 1980-04-20 06:00:00 (Sun)
62443184400, #  local_start 1979-09-30 01:00:00 (Sun)
62460727200, #    local_end 1980-04-20 02:00:00 (Sun)
-14400,
0,
'AST',
    ],
    [
62460741600, #    utc_start 1980-04-20 06:00:00 (Sun)
62474389200, #      utc_end 1980-09-25 05:00:00 (Thu)
62460730800, #  local_start 1980-04-20 03:00:00 (Sun)
62474378400, #    local_end 1980-09-25 02:00:00 (Thu)
-10800,
1,
'ADT',
    ],
    [
62474389200, #    utc_start 1980-09-25 05:00:00 (Thu)
DateTime::TimeZone::INFINITY, #      utc_end
62474374800, #  local_start 1980-09-25 01:00:00 (Thu)
DateTime::TimeZone::INFINITY, #    local_end
-14400,
0,
'AST',
    ],
];

sub olson_version {'2022a'}

sub has_dst_changes {7}

sub _max_year {2032}

sub _new_instance {
    return shift->_init( @_, spans => $spans );
}



1;


#                                      Copyright 2024 WebPros International, LLC
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited.
package Cpanel::DAV::WinTZ;

use strict;
use warnings;

=head1 NAME

Cpanel::DAV::WinTZ

=head1 DESCRIPTION

Provides mapping from Win32 style timezone names to global standards.

=cut

=head1 FUNCTIONS

=head2 get_std_tz($non_std_timezone)

Given a non-standard timezone string, such as "Eastern Standard Time", will return a
corresponding timezone that DateTime recognizes, or an empty string if $non_std_timezone
is unknown.

=cut

sub get_std_tz {
    my ($non_std) = @_;
    return '' if !length $non_std;
    my $winhr = get_map_hash();
    if ( defined $winhr->{$non_std} ) {
        return $winhr->{$non_std};
    }
    else {
        return '';
    }
}

=head2 get_map_hash()

Takes no args, returns a hash reference to the map of Win32 timezones to their global standard counterparts.

=cut

sub get_map_hash {
    my %WinToIANA = (
        'Afghanistan'                     => 'Asia/Kabul',
        'Afghanistan Standard Time'       => 'Asia/Kabul',
        'Alaskan'                         => 'America/Anchorage',
        'Alaskan Standard Time'           => 'America/Anchorage',
        'Aleutian Standard Time'          => 'America/Adak',
        'Altai Standard Time'             => 'Asia/Barnaul',
        'Arab'                            => 'Asia/Riyadh',
        'Arab Standard Time'              => 'Asia/Riyadh',
        'Arabian'                         => 'Asia/Muscat',
        'Arabian Standard Time'           => 'Asia/Muscat',
        'Arabic Standard Time'            => 'Asia/Baghdad',
        'Argentina Standard Time'         => 'America/Argentina/Buenos_Aires',
        'Armenian Standard Time'          => 'Asia/Yerevan',
        'Astrakhan Standard Time'         => 'Europe/Astrakhan',
        'Atlantic'                        => 'America/Halifax',
        'Atlantic Standard Time'          => 'America/Halifax',
        'AUS Central'                     => 'Australia/Darwin',
        'AUS Central Standard Time'       => 'Australia/Darwin',
        'Aus Central W. Standard Time'    => 'Australia/Eucla',
        'AUS Eastern'                     => 'Australia/Sydney',
        'AUS Eastern Standard Time'       => 'Australia/Sydney',
        'Azerbaijan Standard Time'        => 'Asia/Baku',
        'Azores'                          => 'Atlantic/Azores',
        'Azores Standard Time'            => 'Atlantic/Azores',
        'Bahia Standard Time'             => 'America/Bahia',
        'Bangkok'                         => 'Asia/Bangkok',
        'Bangkok Standard Time'           => 'Asia/Bangkok',
        'Bangladesh Standard Time'        => 'Asia/Dhaka',
        'Beijing'                         => 'Asia/Shanghai',
        'Belarus Standard Time'           => 'Europe/Minsk',
        'Bougainville Standard Time'      => 'Pacific/Bougainville',
        'Canada Central'                  => 'America/Regina',
        'Canada Central Standard Time'    => 'America/Regina',
        'Cape Verde Standard Time'        => 'Atlantic/Cape_Verde',
        'Caucasus'                        => 'Asia/Yerevan',
        'Caucasus Standard Time'          => 'Asia/Yerevan',
        'Cen. Australia'                  => 'Australia/Adelaide',
        'Cen. Australia Standard Time'    => 'Australia/Adelaide',
        'Central'                         => 'America/Chicago',
        'Central America Standard Time'   => 'America/Tegucigalpa',
        'Central Asia'                    => 'Asia/Almaty',
        'Central Asia Standard Time'      => 'Asia/Almaty',
        'Central Brazilian Standard Time' => 'America/Cuiaba',
        'Central Europe'                  => 'Europe/Prague',
        'Central Europe Standard Time'    => 'Europe/Prague',
        'Central European'                => 'Europe/Belgrade',
        'Central European Standard Time'  => 'Europe/Warsaw',
        'Central Pacific'                 => 'Pacific/Guadalcanal',
        'Central Pacific Standard Time'   => 'Pacific/Guadalcanal',
        'Central Standard Time'           => 'America/Chicago',
        'Central Standard Time (Mexico)'  => 'America/Mexico_City',
        'Chatham Islands Standard Time'   => 'Pacific/Chatham',
        'China'                           => 'Asia/Shanghai',
        'China Standard Time'             => 'Asia/Shanghai',
        'Cuba Standard Time'              => 'America/Havana',
        'Dateline'                        => '-1200',
        'Dateline Standard Time'          => '-1200',
        'E. Africa'                       => 'Africa/Nairobi',
        'E. Africa Standard Time'         => 'Africa/Nairobi',
        'E. Australia'                    => 'Australia/Brisbane',
        'E. Australia Standard Time'      => 'Australia/Brisbane',
        'E. Europe'                       => 'Europe/Helsinki',
        'E. Europe Standard Time'         => 'Europe/Chisinau',
        'E. South America'                => 'America/Sao_Paulo',
        'E. South America Standard Time'  => 'America/Sao_Paulo',
        'Easter Island Standard Time'     => 'Pacific/Easter',
        'Eastern'                         => 'America/New_York',
        'Eastern Standard Time'           => 'America/New_York',
        'Eastern Standard Time (Mexico)'  => 'America/Cancun',
        'Egypt'                           => 'Africa/Cairo',
        'Egypt Standard Time'             => 'Africa/Cairo',
        'Ekaterinburg'                    => 'Asia/Yekaterinburg',
        'Ekaterinburg Standard Time'      => 'Asia/Yekaterinburg',
        'Fiji'                            => 'Pacific/Fiji',
        'Fiji Standard Time'              => 'Pacific/Fiji',
        'FLE'                             => 'Europe/Helsinki',
        'FLE Standard Time'               => 'Europe/Helsinki',
        'Georgian Standard Time'          => 'Asia/Tbilisi',
        'GFT'                             => 'Europe/Athens',
        'GFT Standard Time'               => 'Europe/Athens',
        'GMT'                             => 'Europe/London',
        'GMT Standard Time'               => 'Europe/London',
        'Greenland Standard Time'         => 'America/Godthab',
        'Greenwich'                       => 'GMT',
        'Greenwich Standard Time'         => 'GMT',
        'GTB'                             => 'Europe/Athens',
        'GTB Standard Time'               => 'Europe/Athens',
        'Haiti Standard Time'             => 'America/Port-au-Prince',
        'Hawaiian'                        => 'Pacific/Honolulu',
        'Hawaiian Standard Time'          => 'Pacific/Honolulu',
        'India'                           => 'Asia/Calcutta',
        'India Standard Time'             => 'Asia/Kolkata',
        'Iran'                            => 'Asia/Tehran',
        'Iran Standard Time'              => 'Asia/Tehran',
        'Israel'                          => 'Asia/Jerusalem',
        'Israel Standard Time'            => 'Asia/Jerusalem',
        'Jordan Standard Time'            => 'Asia/Amman',
        'Kaliningrad Standard Time'       => 'Europe/Kaliningrad',
        'Kamchatka Standard Time'         => 'Asia/Kamchatka',
        'Korea'                           => 'Asia/Seoul',
        'Korea Standard Time'             => 'Asia/Seoul',
        'Libya Standard Time'             => 'Africa/Tripoli',
        'Line Islands Standard Time'      => 'Pacific/Kiritimati',
        'Lord Howe Standard Time'         => 'Australia/Lord_Howe',
        'Magadan Standard Time'           => 'Asia/Magadan',
        'Magallanes Standard Time'        => 'America/Punta_Arenas',
        'Marquesas Standard Time'         => 'Pacific/Marquesas',
        'Mauritius Standard Time'         => 'Indian/Mauritius',
        'Mexico'                          => 'America/Mexico_City',
        'Mexico Standard Time'            => 'America/Mexico_City',
        'Mexico Standard Time 2'          => 'America/Chihuahua',
        'Mid-Atlantic'                    => 'Atlantic/South_Georgia',
        'Mid-Atlantic Standard Time'      => 'Atlantic/South_Georgia',
        'Middle East Standard Time'       => 'Asia/Beirut',
        'Montevideo Standard Time'        => 'America/Montevideo',
        'Morocco Standard Time'           => 'Africa/Casablanca',
        'Mountain'                        => 'America/Denver',
        'Mountain Standard Time'          => 'America/Denver',
        'Mountain Standard Time (Mexico)' => 'America/Mazatlan',
        'Myanmar Standard Time'           => 'Asia/Rangoon',
        'N. Central Asia Standard Time'   => 'Asia/Novosibirsk',
        'Namibia Standard Time'           => 'Africa/Windhoek',
        'Nepal Standard Time'             => 'Asia/Katmandu',
        'New Zealand'                     => 'Pacific/Auckland',
        'New Zealand Standard Time'       => 'Pacific/Auckland',
        'Newfoundland'                    => 'America/St_Johns',
        'Newfoundland Standard Time'      => 'America/St_Johns',
        'Norfolk Standard Time'           => 'Pacific/Norfolk',
        'North Asia East Standard Time'   => 'Asia/Irkutsk',
        'North Asia Standard Time'        => 'Asia/Krasnoyarsk',
        'North Korea Standard Time'       => 'Asia/Pyongyang',
        'Omsk Standard Time'              => 'Asia/Omsk',
        'Pacific'                         => 'America/Los_Angeles',
        'Pacific SA'                      => 'America/Santiago',
        'Pacific SA Standard Time'        => 'America/Santiago',
        'Pacific Standard Time'           => 'America/Los_Angeles',
        'Pacific Standard Time (Mexico)'  => 'America/Tijuana',
        'Pakistan Standard Time'          => 'Asia/Karachi',
        'Paraguay Standard Time'          => 'America/Asuncion',
        'Prague Bratislava'               => 'Europe/Prague',
        'Qyzylorda Standard Time'         => 'Asia/Qyzylorda',
        'Romance'                         => 'Europe/Paris',
        'Romance Standard Time'           => 'Europe/Paris',
        'Russia Time Zone 10'             => 'Asia/Srednekolymsk',
        'Russia Time Zone 11'             => 'Asia/Anadyr',
        'Russia Time Zone 3'              => 'Europe/Samara',
        'Russian'                         => 'Europe/Moscow',
        'Russian Standard Time'           => 'Europe/Moscow',
        'SA Eastern'                      => 'America/Cayenne',
        'SA Eastern Standard Time'        => 'America/Cayenne',
        'SA Pacific'                      => 'America/Bogota',
        'SA Pacific Standard Time'        => 'America/Bogota',
        'SA Western'                      => 'America/Guyana',
        'SA Western Standard Time'        => 'America/Guyana',
        'Saint Pierre Standard Time'      => 'America/Miquelon',
        'Sakhalin Standard Time'          => 'Asia/Sakhalin',
        'Samoa'                           => 'Pacific/Apia',
        'Samoa Standard Time'             => 'Pacific/Apia',
        'Sao Tome Standard Time'          => 'Africa/Sao_Tome',
        'Saratov Standard Time'           => 'Europe/Saratov',
        'Saudi Arabia'                    => 'Asia/Riyadh',
        'Saudi Arabia Standard Time'      => 'Asia/Riyadh',
        'SE Asia'                         => 'Asia/Bangkok',
        'SE Asia Standard Time'           => 'Asia/Bangkok',
        'Singapore'                       => 'Asia/Singapore',
        'Singapore Standard Time'         => 'Asia/Singapore',
        'South Africa'                    => 'Africa/Harare',
        'South Africa Standard Time'      => 'Africa/Harare',
        'South Sudan Standard Time'       => 'Africa/Juba',
        'Sri Lanka'                       => 'Asia/Colombo',
        'Sri Lanka Standard Time'         => 'Asia/Colombo',
        'Sudan Standard Time'             => 'Africa/Khartoum',
        'Syria Standard Time'             => 'Asia/Damascus',
        'Sydney Standard Time'            => 'Australia/Sydney',
        'Taipei'                          => 'Asia/Taipei',
        'Taipei Standard Time'            => 'Asia/Taipei',
        'Tasmania'                        => 'Australia/Hobart',
        'Tasmania Standard Time'          => 'Australia/Hobart',
        'Tocantins Standard Time'         => 'America/Araguaina',
        'Tokyo'                           => 'Asia/Tokyo',
        'Tokyo Standard Time'             => 'Asia/Tokyo',
        'Tomsk Standard Time'             => 'Asia/Tomsk',
        'Tonga Standard Time'             => 'Pacific/Tongatapu',
        'Transbaikal Standard Time'       => 'Asia/Chita',
        'Turkey Standard Time'            => 'Europe/Istanbul',
        'Turks And Caicos Standard Time'  => 'America/Grand_Turk',
        'Ulaanbaatar Standard Time'       => 'Asia/Ulaanbaatar',
        'US Eastern'                      => 'America/Indianapolis',
        'US Eastern Standard Time'        => 'America/Indianapolis',
        'US Mountain'                     => 'America/Phoenix',
        'US Mountain Standard Time'       => 'America/Phoenix',
        'UTC'                             => 'UTC',
        'UTC+13'                          => '+1300',
        'UTC+12'                          => '+1200',
        'UTC-02'                          => '-0200',
        'UTC-08'                          => '-0800',
        'UTC-09'                          => '-0900',
        'UTC-11'                          => '-1100',
        'Venezuela Standard Time'         => 'America/Caracas',
        'Vladivostok'                     => 'Asia/Vladivostok',
        'Vladivostok Standard Time'       => 'Asia/Vladivostok',
        'Volgograd Standard Time'         => 'Europe/Volgograd',
        'W. Australia'                    => 'Australia/Perth',
        'W. Australia Standard Time'      => 'Australia/Perth',
        'W. Central Africa Standard Time' => 'Africa/Luanda',
        'W. Europe'                       => 'Europe/Berlin',
        'W. Europe Standard Time'         => 'Europe/Berlin',
        'W. Mongolia Standard Time'       => 'Asia/Hovd',
        'Warsaw'                          => 'Europe/Warsaw',
        'West Asia'                       => 'Asia/Karachi',
        'West Asia Standard Time'         => 'Asia/Tashkent',
        'West Bank Standard Time'         => 'Asia/Gaza',
        'West Pacific'                    => 'Pacific/Guam',
        'West Pacific Standard Time'      => 'Pacific/Guam',
        'Western Brazilian Standard Time' => 'America/Rio_Branco',
        'Yakutsk'                         => 'Asia/Yakutsk',
        'Yakutsk Standard Time'           => 'Asia/Yakutsk',
        'Yukon Standard Time'             => 'America/Whitehorse',
    );
    return \%WinToIANA;
}

1;

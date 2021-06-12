function validUserNames(names) {
    return names.filter(name => name.length < 10)
}

validUserName(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'])
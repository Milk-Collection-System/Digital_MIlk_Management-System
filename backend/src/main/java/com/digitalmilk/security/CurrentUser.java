package com.digitalmilk.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public final class CurrentUser {
    private CurrentUser(){}
    public static Long id(){
        Authentication a=SecurityContextHolder.getContext().getAuthentication();
        return ((Number)a.getDetails()).longValue();
    }
    public static String role(){
        Authentication a=SecurityContextHolder.getContext().getAuthentication();
        return a.getAuthorities().iterator().next().getAuthority().replace("ROLE_","");
    }
}

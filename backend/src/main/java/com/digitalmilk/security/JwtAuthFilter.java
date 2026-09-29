package com.digitalmilk.security;

import com.digitalmilk.repository.AppUserRepository;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final AppUserRepository repository;

    public JwtAuthFilter(JwtService jwtService,AppUserRepository repository){
        this.jwtService=jwtService; this.repository=repository;
    }

    protected void doFilterInternal(HttpServletRequest request,HttpServletResponse response,
                                    FilterChain chain)throws ServletException,IOException{
        String header=request.getHeader("Authorization");
        if(header!=null && header.startsWith("Bearer ")){
            try{
                Claims c=jwtService.parse(header.substring(7));
                repository.findByEmailIgnoreCase(c.getSubject()).ifPresent(u->{
                    var auth=new UsernamePasswordAuthenticationToken(
                            u.getEmail(),null,
                            List.of(new SimpleGrantedAuthority("ROLE_"+u.getRole().name())));
                    auth.setDetails(u.getId());
                    SecurityContextHolder.getContext().setAuthentication(auth);
                });
            }catch(Exception ignored){}
        }
        chain.doFilter(request,response);
    }
}
